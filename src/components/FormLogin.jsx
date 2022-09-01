import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

function FormLogin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Endereço de email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  )
}

export default FormLogin;
