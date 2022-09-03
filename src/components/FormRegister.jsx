import React from 'react';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

function FormRegister() {
  return (
    <Form>
      <Container>
        <Row>
          <InputGroup hasValidation>
            <InputGroup.Text className='mb-2'>@</InputGroup.Text>
            <Form.Control
              className='mb-2'
              type="text"
              placeholder='nomeDeUsuario'
              autoFocus
            />
          </InputGroup>
        </Row>
        <Row>
          <Col className='pd-2'>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Endereço de email" 
              />
            </Form.Group>
          </Col>
          <Col className='pd-2'>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Senha"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default FormRegister;
