import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import UserContext from '../context/UserContext';

function FormRegister() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { registerInputValidade } = useContext(UserContext);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    
    if(errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  }

  function validateForm() {
    const { email, user, password } = form;
    const newErrors = {};

    const emailError = registerInputValidade('email', email);
    const userError = registerInputValidade('user', user);
    const passwordError = registerInputValidade('password', password);

    if(emailError) {
      newErrors.email = emailError;
    }
    if(userError) {
      newErrors.user = userError;
    }
    if(passwordError) {
      newErrors.password = passwordError;
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formErros = validateForm();
    if(Object.keys(formErros).length > 0) {
      setErrors(formErros);
    }
  }

  return (
    <Form>
      <Container>
        <Row>
          <Col className='pd-2'>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Endereço de email" 
                onChange={ ({target}) => setField('email', target.value) }
                isInvalid={ !!errors.email }
                required
              />
              <Form.Control.Feedback type="invalid">
                { errors.email }
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='pd-2'>
            <Form.Group className="mb-2" controlId="formUser">
              <Form.Control
                className='mb-2'
                type="text"
                placeholder='nomeDeUsuario'
                autoFocus
                onChange={ ({target}) => setField('user', target.value) }
                isInvalid={ !!errors.user }
                required
              />
              <Form.Control.Feedback type="invalid">
                { errors.user }
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col className='pd-2'>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Senha"
                onChange={ ({target}) => setField('password', target.value) }
                isInvalid={ !!errors.password }
                required
              />
              <Form.Control.Feedback type="invalid">
                { errors.password }
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Button
            type="submit"
            variant="primary"
            className="btn btn-success"
            onClick={ (event) => handleSubmit(event) }
          >
            Cadastrar-se
          </Button>
        </Row>
      </Container>
    </Form>
  );
}

export default FormRegister;
