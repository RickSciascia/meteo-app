import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={8}>
          <p>COPYRIGHT © RICCARDO SCIASCIA 2025</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
