import React, {useState} from "react";
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

    axios.post(composeURL, {
      title,
      content,
      date
    })
    .then(res => {
      console.log(res.data);
      window.open("/", "_self");
    })
  }
  return (
    <div className="compose-body">
      <h1>Compose</h1>
      <Form action="/compose" method="POST">
        <Form.Group className="form-group">
          <Form.Label htmlFor="postTitle">Title</Form.Label>
          <Form.Control
            type="text"
            name="postTitle"
            className="form-control"
            autoComplete="off"
            value={title} onChange={e => setTitle(e.target.value)}
          />
          <Form.Label htmlFor="postContent">Post</Form.Label>
          <Form.Control
            as="textarea"
            name="postContent"
            className="form-control"
            autoComplete="off"
            rows="8"
            value={content} onChange={e => setContent(e.target.value)}
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
