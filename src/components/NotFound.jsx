import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = function () {
  const navigate = useNavigate();
  return (
    <Container fluid className="my-3 min-vh-100">
      <Row className="justify-content-center">
        <Col sm={12} md={8} lg={6}>
          <h1>Spiacente!</h1>
          <p>
            ERRORE: 404 - non siamo riusciti a trovare quello che stai cercando{" "}
          </p>
          <Button
            variant="info"
            onClick={() => {
              navigate("/");
            }}
          >
            TORNA ALLA HOME
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
