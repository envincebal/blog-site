import React from "react";
import axios from "axios";

import "./PostEntry.css";
const PostEntry = (props) => {
  const deletePost = (e, id) => {
    e.preventDefault();
    axios.delete("http://localhost:8080/delete/" + id).then((res) => {
      console.log(res);
    });
  };
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
        <button type="button" className="btn btn-outline-primary">
          VIEW
        </button>

        <button
          type="button"
          name="edit"
          className="btn btn-outline-secondary"
        >
          EDIT
        </button>

        <form>
          <button
            onClick={deletePost}
            name="delete"
            className="btn btn-outline-danger"
          >
            DELETE
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEntry;
