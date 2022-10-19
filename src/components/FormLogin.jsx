import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from './Modals/Register';
import UserContext from '../hooks/context/UserContext';

function FormLogin() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [loginError, setLoginError] = useState(false);
  const { loginInputValidate } = useContext(UserContext);
  const navigate = useNavigate();
  const handleShow = () => setShow(true);

  function redirect() {
    navigate('/home');
  }

  function setField(field, value) {
    setLoginError(false);
    setForm({
      ...form,
      [field]: value,
    });
  }

  async function validateForm() {
    const { email, password } = form;
    const newErrors = {};

    const autorized = await loginInputValidate(email, password);

    if(autorized) {
      setLoginError(false);
      redirect();
    } else {
      setLoginError(true);
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateForm();
  }

  return (
    <Form>
      <Container>
        <Row>
          <Form.Group className="mb-3 position-relative" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Endereço de email" 
              onChange={ ({target}) => setField('email', target.value) }
              isInvalid={ loginError }
            />
            <Form.Control.Feedback tooltip type="invalid">
              { loginError && 'Email Ou senha invalidos' }
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Senha"
              isInvalid={ loginError }
              onChange={ ({target}) => setField('password', target.value) }
            />
          </Form.Group>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button
            className="w-50"
            variant="primary"
            type="submit"
            onClick={ handleSubmit }
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
