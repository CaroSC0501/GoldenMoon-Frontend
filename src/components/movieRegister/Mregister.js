import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { API_URL } from "../../util/Util";

export const Mregister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthDate: "",
    phone: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendClientApi();
    console.log(`response`, response);
  };

  const sendClientApi = async () => {
    const requestData = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    };
    let response = await fetch("http://localhost:8080/api/auth", requestData);
    response = await response.json();
    return response;
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de la pelicula"
            name="MovieName"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Reparto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Reparto"
            name="staff"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirhtDate">
          <Form.Label>descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripción de la pelicula"
            name="descripcion"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="App-link"
            placeholder="Link de la imagen"
            name="image"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Trailer</Form.Label>
          <Form.Control
            type="App-link"
            placeholder="Link del trailer"
            name="Trailer"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};