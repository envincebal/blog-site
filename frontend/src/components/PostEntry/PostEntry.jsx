import React from "react";
import { Link } from "react-router-dom";

import "./PostEntry.css";
const PostEntry = (props) => {

  return (
    <div className="blog-entry">
      Posted on{" "}
      <span className="post-date">
        {new Date(props.date).toLocaleString("en-US")}
      </span>
      <h3>
        {props.title.length > 37
          ? props.title.substring(0, 37) + "..."
          : props.title}
      </h3>
      <div className="entry-footer">
        <Link to={{ pathname: "/posts/" + props.id, state: { id: props.id } }}>
          <button type="button" className="btn btn-outline-primary">
            VIEW
          </button>
        </Link>
        <Link
          to={{
            pathname: "/edit/" + props.id,
            state: {
              id: props.id,
              title: props.title,
              content: props.content,
            },
          }}
        >
          <button
            type="button"
            name="edit"
            className="btn btn-outline-secondary"
          >
            EDIT
          </button>
        </Link>
        <button
          name="delete"
          className="btn btn-outline-danger"
          onClick={props.deletePost}
        >
          DELETE
        </button>
      
      </div>
    </div>
  );
};

export default PostEntry;
