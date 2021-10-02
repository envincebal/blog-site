import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

const EditPage = () => {
  const [title, setTitle] = useState(useLocation().state.title);
  const [content, setContent] = useState(useLocation().state.content);
  const postId = useLocation().state.id;

  const handleEditPost = (e) => {
    e.preventDefault();

    const editURL = "https://protected-garden-31419.herokuapp.com/edit/" + postId;

    axios
      .put(editURL, {
        title,
        content,
      })
      .then((res) => {
        console.log(res.data);
        window.open("/frontend", "_self");
      });
  };
  return (
    <div className="compose-body post-body">
      <Link to={"/"}>
        <Button type="button" className="back-button" variant="primary">
          Back
        </Button>
      </Link>
      <h1>Edit Post</h1>
      <Form>
        <Form.Group className="form-group">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Post</Form.Label>
          <Form.Control
            as="textarea"
            className="form-control"
            autoComplete="off"
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button
          onClick={handleEditPost}
          name="button"
          className="btn btn-primary"
          disabled={!title || !content}
        >
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
