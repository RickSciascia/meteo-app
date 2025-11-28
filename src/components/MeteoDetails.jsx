import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Spinner, Card, Alert } from "react-bootstrap";
const MeteoDetails = function () {
  const [meteo, setMeteo] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);
  const params = useParams();
  const getMeteoForCity = function () {
    const endpoint = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const cityToFetch = params.city;
    const keyAndMetrics =
      ",IT&appid=e1e3bc2b73adcc8020f978f0652ed3c6&units=metric";
    const URL = endpoint + cityToFetch + keyAndMetrics;
    fetch(URL)
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("errore nella response " + r.status);
      })
      .then((meteo) => {
        console.log(meteo);
        setLoading(false);
        setMeteo(meteo);
      })
      .catch((err) => {
        console.log("Errore", err);
        setLoading(false);
        // setError(true);
      });
  };
  useEffect(() => {
    getMeteoForCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-center my-3 min-vh-100">
          <Spinner animation="border" variant="info"></Spinner>
        </div>
      ) : (
        <>
          <Container fluid className="min-vh-100">
            <h2>Dettagli Meteo per {meteo.city.name}, Italy </h2>
            <Row className="justify-content-center">
              <Col sm={12} md={10}>
                <Card bg="info" className="my-3">
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {meteo.city.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Italia
                    </Card.Subtitle>
                    <Card.Text className="my-1 fw-bold">
                      METEO ATTUALE:
                    </Card.Text>
                    <Card.Text className="my-1">
                      {meteo.list[0].weather[0].main} -{" "}
                      {meteo.list[0].weather[0].description}
                    </Card.Text>
                    <Card.Text className="my-1">
                      Temperatura Attuale: {meteo.list[0].main.temp} °C
                    </Card.Text>
                    <Card.Text className="my-1">
                      Umidità: {meteo.list[0].main.humidity} %
                    </Card.Text>
                    <Card.Text className="my-1">
                      Percepita: {meteo.list[0].main.feels_like} °C
                    </Card.Text>
                    <Card.Text className="my-1">
                      Vento: {meteo.list[0].wind.speed} Km/h
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card bg="info" className="my-3">
                  <Card.Body>
                    <Card.Text className="my-1 fw-bold">
                      PREVISIONI METEO DEL {meteo.list[8].dt_txt}
                    </Card.Text>
                    <Card.Text className="my-1">
                      {meteo.list[8].weather[0].main} -{" "}
                      {meteo.list[8].weather[0].description}
                    </Card.Text>
                    <Card.Text className="my-1">
                      Temperatura Prevista: {meteo.list[8].main.temp} °C
                    </Card.Text>
                    <Card.Text className="my-1">
                      Umidità: {meteo.list[8].main.humidity} %
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text className="my-1 fw-bold">
                      PREVISIONI METEO DEL {meteo.list[16].dt_txt}
                    </Card.Text>
                    <Card.Text className="my-1">
                      {meteo.list[16].weather[0].main} -{" "}
                      {meteo.list[16].weather[0].description}
                    </Card.Text>
                    <Card.Text className="my-1">
                      Temperatura Prevista: {meteo.list[16].main.temp} °C
                    </Card.Text>
                    <Card.Text className="my-1">
                      Umidità: {meteo.list[24].main.humidity} %
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text className="my-1 fw-bold">
                      PREVISIONI METEO DEL {meteo.list[16].dt_txt}
                    </Card.Text>
                    <Card.Text className="my-1">
                      {meteo.list[24].weather[0].main} -{" "}
                      {meteo.list[24].weather[0].description}
                    </Card.Text>
                    <Card.Text className="my-1">
                      Temperatura Prevista: {meteo.list[24].main.temp} °C
                    </Card.Text>
                    <Card.Text className="my-1">
                      Umidità: {meteo.list[24].main.humidity} %
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default MeteoDetails;
