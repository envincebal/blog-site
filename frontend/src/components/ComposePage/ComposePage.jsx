import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

const ComposePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const date = new Date();
  const handleCompose = (e) => {
    e.preventDefault();

    const composeURL = "http://localhost:8080/compose";

    axios
      .post(composeURL, {
        title,
        content,
        date,
      })
      .then((res) => {
        console.log(res.data);
        window.open("/", "_self");
      });
  };
  return (
    <div className="compose-body post-body">
      <Link to={"/"}>
        <Button type="button" className="back-button" variant="primary">
          Back
        </Button>
      </Link>
      <h1>Compose</h1>
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
            name="postContent"
            className="form-control"
            autoComplete="off"
            rows="8"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button
          onClick={handleCompose}
          name="button"
          className="btn btn-primary"
          disabled={!title || !content}
        >
          Publish
        </Button>
      </Form>
    </div>
  );
};

export default ComposePage;
