import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormLogin() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [verifiedPass, setVerifiedPass] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    verifyInputs();
  }, [verifiedPass, verifiedEmail]);

  function redirect(event) {
    event.preventDefault();
    navigate('/home');
  }

  function verifyInput({ target }, regex, setVerified) {
    const { value } = target;
    const result = value.toLowerCase().match(
      regex
    );
    setVerified(result ? true : false);
  }

  function verifyInputs() {
    console.log((verifiedPass && verifiedEmail) ? false : true);
    setDisableButton( verifiedPass && verifiedEmail ? false : true );
  }

  return (
    <Form className="">
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Endereço de email" 
              onChange={ (event) => verifyInput(event, emailRegex, setVerifiedEmail) }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={ (event) => verifyInput(event, passwordRegex, setVerifiedPass) }
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
