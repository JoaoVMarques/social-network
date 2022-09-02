import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../context/UserContext';

function FormLogin() {
  const { disableButton, verifyInput } = useContext(UserContext);
  const navigate = useNavigate();

  function redirect(event) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <Form className="">
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Endereço de email" 
              onChange={ (event) => verifyInput(event) }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Senha"
              onChange={ (event) => verifyInput(event) }
            />
          </Form.Group>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button
            className="w-50"
            variant="primary"
            disabled={ disableButton }
            type="submit"
            onClick={ (event) => redirect(event) }
          >
            Entrar
          </Button>
        </Row>
      </Container>
      <hr />
    </Form>
  );
}

export default FormLogin;
