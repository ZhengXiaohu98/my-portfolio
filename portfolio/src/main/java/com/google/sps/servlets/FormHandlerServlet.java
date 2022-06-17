package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/comments-handler")
public class FormHandlerServlet extends HttpServlet {

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

		// Get the name & comments entered in the form.
		String comments = request.getParameter("comments");
		String p_name = request.getParameter("person-name");
		long timestamp = System.currentTimeMillis();

		// Print the value so you can see it in the server logs.
		System.out.println(String.format("%s submitted: %s", p_name, comments));

		Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
		KeyFactory keyFactory = datastore.newKeyFactory().setKind("Comments");
		FullEntity commentEntity = Entity.newBuilder(keyFactory.newKey())
				.set("name", p_name)
				.set("content", comments)
				.set("timestamp", timestamp)
				.build();
		datastore.put(commentEntity);
		// Write the value to the response so the user can see it.
		response.getWriter().println("You submitted: " + comments);
	}
}