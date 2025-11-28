import { Container, Row, Col } from "react-bootstrap";
import MeteoCard from "./MeteoCard";

const Home = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <h2>Aggiornamento in tempo reale:</h2>
        </Col>
        <Col sm={12} md={8}>
          <MeteoCard city={"Milan"} />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
