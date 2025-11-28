import { useState, useEffect } from "react";
import { Spinner, Card, Col, Button } from "react-bootstrap";
const MeteoCard = function (props) {
  const [loading, setLoading] = useState(true);
  const [cityForecast, setCityForecast] = useState({});

  const getMeteo = function () {
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
    const cityToFetch = props.city;
    const keyAndMetrics =
      ",IT&appid=e1e3bc2b73adcc8020f978f0652ed3c6&units=metric";
    const URL = endpoint + cityToFetch + keyAndMetrics;
    fetch(URL)
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error("errore nella response" + r.status);
      })
      .then((meteo) => {
        console.log(meteo);
        setLoading(false);
        setCityForecast(meteo);
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  useEffect(() => {
    getMeteo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="info"></Spinner>
        </div>
      ) : (
        <Col sm={12} md={6} lg={4} key={cityForecast.id}>
          <Card bg="info" className="my-3">
            <Card.Body>
              <Card.Title>{props.city}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Italia</Card.Subtitle>
              <Card.Text>
                {"Attualmente: "}
                {cityForecast.weather[0].main}
                {" - "}
                {cityForecast.weather[0].description}
              </Card.Text>
              <Card.Text>Temperatura: {cityForecast.main.temp} °C</Card.Text>
              <Card.Text>Umidità: {cityForecast.main.humidity} %</Card.Text>
              <Card.Text>
                Percepita: {cityForecast.main.feels_like} °C
              </Card.Text>
              <Card.Text>Vento: {cityForecast.wind.speed} Km/h</Card.Text>
              <div className="d-flex justify-content-end">
                <Button
                  variant="transparent"
                  className="text-white"
                  onClick={() => {
                    getMeteo();
                  }}
                >
                  <i class="bi bi-arrow-clockwise"></i>
                </Button>
              </div>

              {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MeteoCard;
