import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import UserContext from '../hooks/context/UserContext';
import { saveAccount } from '../utils/LocalStorage';

function FormRegister(props) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { registerInputValidate } = useContext(UserContext);

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
    const { email, username, password } = form;
    const newErrors = {};

    const emailError = registerInputValidate('email', email);
    const userNameError = registerInputValidate('username', username);
    const passwordError = registerInputValidate('password', password);

    if(emailError) {
      newErrors.email = emailError;
    }
    if(userNameError) {
      newErrors.username = userNameError;
    }
    if(passwordError) {
      newErrors.password = passwordError;
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { handleClose } = props;
    const formErros = validateForm();
    if(Object.keys(formErros).length > 0) {
      setErrors(formErros);
    } else {
      saveAccount(form);
      handleClose();
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
                autoFocus
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
                onChange={ ({target}) => setField('username', target.value) }
                isInvalid={ !!errors.username }
                required
              />
              <Form.Control.Feedback type="invalid">
                { errors.username }
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

FormRegister.propTypes = {
  handleClose: PropTypes.func,
}.isRequired;

export default FormRegister;
