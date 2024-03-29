import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../config/api";

function AddArtist() {
  const [addArtist, setAddArtist] = useState({
    name: "",
    old: "",
    type: "",
    startcareer: "",
  });

  const handleChangeArtist = (e) => {
    const { name, type } = e.target;
    setAddArtist({
      ...addArtist,
      [name]: type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log("blob image", url);
      // setPreview(url);
    }
  };

  const handleAddArtist = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("name", addArtist.name);
      formData.append("old", addArtist.old);
      formData.append("type", addArtist.type);
      formData.append("startcareer", addArtist.startcareer);

      const response = await API.post("/artist", formData);
      console.log("berhasil menambahkan artist", response);
      alert("berhasil menambahkan artist");

      addArtist.name = "";
      addArtist.old = "";
      addArtist.type = "";
      addArtist.startcareer = "";
    } catch (error) {
      alert("gagal menambahkan artist");
      console.log(error);
    }
  });

  return (
    <div style={{ backgroundColor: "#161616" }} className="pt-5 vh-100">
      <Container className="pt-5">
        <h2 className="text-white mb-4">Add Music</h2>
        <Form>
          <Form.Group className="mb-4 gap-2">
            <Form.Control
              type="text"
              name="name"
              onChange={handleChangeArtist}
              placeholder="Name"
              style={{ backgroundColor: "#454545" }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="old"
              onChange={handleChangeArtist}
              placeholder="Old"
              style={{ backgroundColor: "#454545" }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="type">
            <Form.Select
              name="type"
              onChange={handleChangeArtist}
              style={{ backgroundColor: "#454545" }}
            >
              <option>-- Pilih --</option>
              <option value="Solo">Solo</option>
              <option value="Group">Group</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="startcareer"
              onChange={handleChangeArtist}
              placeholder="Start a Career"
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

export default AddArtist;
