package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/message")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] messages = {"I am interested in Unreal Engine 5!", 
													"I like C++, but I am using java now!",
													"I often post leetcode solutions!"};
		
		response.setContentType("application/json;");
    response.getWriter().println("{ \"messages\" : "+converListToJson(messages) +" }");
  }

	private String converListToJson(String[] list) {
		String str = "[";
		int n = list.length;
		for(int i = 0; i < n-1; ++i) {
			str += "\"" + list[i] + "\",";
		}
		str += "\"" + list[n-1] + "\"]";
		return str;
	}
}
