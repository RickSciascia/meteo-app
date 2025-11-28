import { Container, Row, Col } from "react-bootstrap";
import MeteoCard from "./MeteoCard";

const Home = function () {
  const date = new Date();
  const ora = date.getHours();
  const minuti = date.getMinutes();
  const oraCorretta = ora < 10 ? `0${ora}` : ora;
  const minutiCorretti = minuti < 10 ? `0${minuti}` : minuti;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={8} className="mt-3">
          <h3 className="text-center">
            Attualmente nelle principali città Italiane:
          </h3>
          <h6 className="text-center">
            Ultimo aggiornamento alle {oraCorretta}:{minutiCorretti}
          </h6>
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
