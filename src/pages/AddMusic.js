import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function AddMusic() {
  return (
    <div style={{ backgroundColor: "#161616" }} className="pt-5 vh-100">
      <Container className="pt-5">
        <h2 className="text-white mb-4">Add Music</h2>
        <Form>
          <Form.Group className="d-flex mb-4 gap-2">
            <Form.Control
              type="text"
              name="title"
              className="w-75"
              placeholder="Title"
              style={{ backgroundColor: "#454545" }}
            />

            <Form.Control
              type="file"
              id="upload"
              name="thumbnail"
              className="w-25"
              style={{ backgroundColor: "#454545" }}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="year"
              placeholder="Year"
              style={{ backgroundColor: "#454545" }}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Select
              name="artistid"
              style={{ backgroundColor: "#454545" }}
              required
            >
              <option>-- Pilih --</option>
              <option>Bunga Citra Lestari</option>
              <option>Ari Lasso</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="file"
              id="upload"
              name="attache"
              className="w-25"
              style={{ backgroundColor: "#454545" }}
            />
          </Form.Group>

          <Form.Group className="mb-4 d-flex justify-content-center mt-5">
            <Button
              variant="primary"
              type="submit"
              className="d-flex px-5 border-0"
              style={{ backgroundColor: "#F58033" }}
            >
              Add Song
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default AddMusic;
