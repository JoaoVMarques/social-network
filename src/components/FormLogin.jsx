import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Register from './Modals/Register';
import UserContext from '../context/UserContext';

function FormLogin() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [loginError, setLoginError] = useState(false);
  const { registerInputValidade } = useContext(UserContext);
  const navigate = useNavigate();
  const handleShow = () => setShow(true);

  function redirect() {
    navigate('/home');
  }

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function validateForm() {
    const { email, password } = form;
    const newErrors = {};

    const emailError = registerInputValidade('email', email) ? false : true;
    const passwordError = registerInputValidade('password', password) ? false : true;
    console.log(`Email: ${emailError}`);
    console.log(`Senha: ${passwordError}`);
    console.log(emailError && passwordError);

    if(emailError && passwordError) {
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
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Endereço de email" 
              onChange={ ({target}) => setField('email', target.value) }
              isInvalid={ loginError }
            />
            <Form.Control.Feedback type="invalid">
              { loginError && 'Email Ou senha invalidos' }
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
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
            onClick={ (event) => handleSubmit(event) }
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
