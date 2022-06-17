package com.google.sps.servlets;

public class Comment {
	private long id;
	private long timestamp;
	private String name;
	private String content;

	public Comment(long id, String name, String content, long timestamp) {
		this.id = id;
		this.name = name;
		this.content = content;
		this.timestamp = timestamp;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getContent() {
		return content;
	}

	public long getTimeStamp() {
		return timestamp;
	}

}
