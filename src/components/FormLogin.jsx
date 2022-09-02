import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

function FormLogin() {
  return (
    <Form className="">
      <Container>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Endereço de email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
        </Row>
        <Row className="d-flex justify-content-center">
          <Button className="w-50" variant="primary" type="submit">
            Entrar
          </Button>
        </Row>
      </Container>
      <hr></hr>
    </Form>
  )
}

export default FormLogin;
