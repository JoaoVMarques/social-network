import { Row, Container, Col  } from "react-bootstrap";
import FormLogin from "../components/FormLogin";
import '../styles/styles.css'

function App() {
  return (
    <div className="d-flex bg-light main-page ">
      <Container className="d-flex align-items-center">
        <Row>
          <Col className="px-5" xs={12} md={6}>
            <h1> <span className="text-primary">Marques</span> Networking</h1>
            <h3 className="text-secondary">A rede social para se conectar com milhares de pessoas.</h3>
          </Col>
          <Col className="bg-white py-3 rounded shadow border-left" xs={12} md={6}>
          <FormLogin />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
