import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MeteoCard from "./MeteoCard";

const Home = function () {
  const date = new Date();
  const ora = date.getHours();
  const minuti = date.getMinutes();
  const oraCorretta = ora < 10 ? `0${ora}` : ora;
  const minutiCorretti = minuti < 10 ? `0${minuti}` : minuti;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <Container fluid className="min-vh-100">
      <Row className="justify-content-center">
        <Col sm={12} md={8} className="mt-3">
          <h3 className="text-center">
            Attualmente nelle principali città Italiane:
          </h3>
          <h6 className="text-center">
            Ultimo aggiornamento alle {oraCorretta}:{minutiCorretti}
          </h6>
        </Col>
        <Col sm={12} className="mt-3 text-center">
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="search"
                  value={search}
                  placeholder="Cerca una città Italiana"
                  className=" mr-sm-2"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Col>
              <Col xs="auto">
                <Button
                  type="submit"
                  onClick={() => {
                    navigate(`/details/${search}`);
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={10}>
          <Row>
            <MeteoCard city={"Torino"} />
            <MeteoCard city={"Milano"} />
            <MeteoCard city={"Bolzano"} />
            <MeteoCard city={"Venezia"} />
            <MeteoCard city={"Firenze"} />
            <MeteoCard city={"Bologna"} />
            <MeteoCard city={"Roma"} />
            <MeteoCard city={"Cagliari"} />
            <MeteoCard city={"Napoli"} />
            <MeteoCard city={"Potenza"} />
            <MeteoCard city={"Bari"} />
            <MeteoCard city={"Palermo"} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
