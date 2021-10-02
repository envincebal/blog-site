import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

import "./PostView.css";

const PostView = () => {
  const postId = useLocation().state.id;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("https://protected-garden-31419.herokuapp.com/posts/" + postId).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  });

  return (
    <div className="post-body">
      <Link to={"/"}>
        <Button type="button" className="back-button" variant="primary">
          Back
        </Button>
      </Link>
      <h2 className="post-title">{title}</h2>
      <hr />
      <p className="post-content">{content}</p>
    </div>
  );
};

export default PostView;
