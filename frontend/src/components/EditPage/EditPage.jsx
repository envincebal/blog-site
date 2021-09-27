import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditPage = () => {
  return (
    <div className="compose-body">
      <h1>Compose</h1>
      <Form action="/edit/<%= id %>?_method=PUT" method="POST">
        <Form.Group className="form-group">
          <Form.Label htmlFor="postTitle">Title</Form.Label>
          <Form.Control
            type="text"
            name="postTitle"
            className="form-control"
            id="postTitle"
            autoComplete="off"
            onKeyUp="composeHandler()"
          />
          <Form.Label htmlFor="postBody">Post</Form.Label>
          <Form.Control
            as="textarea"
            id="postBody"
            name="postBody"
            className="form-control"
            autoComplete="off"
            rows="8"
            onKeyUp="composeHandler()"
          />
        </Form.Group>
        <Button
          type="submit"
          name="button"
          className="btn btn-primary"
          disabled
        >
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
