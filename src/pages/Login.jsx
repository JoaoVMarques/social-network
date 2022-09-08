import React from 'react';
import { Row, Container, Col  } from 'react-bootstrap';
import FormLogin from '../components/FormLogin';
import LoginTitle from '../components/LoginTitle';

function Login() {
  return (
    <div className="d-flex bg-light main-page">
      <Container className="d-flex align-items-center">
        <Row>
          <Col className="px-5" md={ 6 }>
            <LoginTitle />
          </Col>
          <Col className="bg-white py-3 rounded shadow border-left" md={ 6 }>
            <FormLogin />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
