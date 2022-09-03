import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../context/UserContext';
import Register from './Modals/Register';

function FormLogin() {
  const [show, setShow] = useState(false);
  const { disableButton, verifyInput } = useContext(UserContext);
  const navigate = useNavigate();
  const handleShow = () => setShow(true);

  function redirect(event) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <Form>
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="formEmail">
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
          <Form.Group className="mb-3" controlId="formPassword">
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
        <hr />
        <Row className="d-flex justify-content-center">
          <Button className="btn btn-success w-50" onClick={ handleShow }>
            Criar conta
          </Button>
        </Row>
      </Container>
      <Register show={ show } setShow={ setShow } />
    </Form>
  );
}

export default FormLogin;
