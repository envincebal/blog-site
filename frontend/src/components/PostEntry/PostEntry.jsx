import React from 'react'

import "./PostEntry.css";
const PostEntry = (props) => {
  return (
    <div className="blog-entry">
    Posted on <span className="post-date">
      {new Date(props.date).toLocaleString('en-US')}
    </span>
    {/* <% if(post.title.length > 37) { %>
      <h3>
        <%= post.title.substring(0, 37) + "..." %>
      </h3>
      <% } else { %>
      <h3>
        <%= post.title %>
      </h3>
    <% } %> */}
   <h3>{props.title.length > 37 ? props.title.substring(0, 37) + "..." : props.title}</h3> 
    <div className="entry-footer">
      <a href="/posts/<%= post._id %>" className="post-link">
        <button type="button" className="btn btn-outline-primary">VIEW</button>
      </a>

      <a href="/edit/<%= post._id %>" className="post-link">
        <button type="button" name="edit" value="<%= post.title %>" className="btn btn-outline-secondary">EDIT</button>
      </a>

      <form action="/delete?page=<%= currentPage %>" method="POST">
        <button type="submit" name="delete" value="<%= post._id %>" className="btn btn-outline-danger">DELETE</button>
      </form>
    </div>
  </div>
  )
}

export default PostEntry;
