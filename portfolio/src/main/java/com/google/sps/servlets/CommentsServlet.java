package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;

/** Servlet responsible for getting comments. */
@WebServlet("/get-comments")
public class CommentsServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
		Query<Entity> query = Query.newEntityQueryBuilder().setKind("Comments").setOrderBy(OrderBy.desc("timestamp"))
				.build();
		QueryResults<Entity> results = datastore.run(query);

		List<Comment> comments = new ArrayList<>();
		while (results.hasNext()) {
			Entity entity = results.next();

			long id = entity.getKey().getId();
			String name = entity.getString("name");
			String content = entity.getString("content");
			long timestamp = entity.getLong("timestamp");

			Comment comment = new Comment(id, name, content, timestamp);
			comments.add(comment);
		}

		String resultList = convertListToJson(comments);
		response.setContentType("application/json;");
		response.getWriter().println(resultList);
	}

	private String convertListToJson(List<Comment> list) {
		String ret = "{\"comments\" : [";
		int n = list.size();
		for (int i = 0; i < n; ++i) {
			Comment cur = list.get(i);
			ret += "{\"id\":" + Long.toString(cur.getId()) + ", \"timeStamp\":" + Long.toString(cur.getTimeStamp());
			ret += ", \"name\":\"" + cur.getName() + "\", \"content\":\"" + cur.getContent() + "\"},";
		}
		ret = ret.substring(0, ret.length() - 1) + "]}";
		return ret;
	}
}