import { useState, useEffect } from "react";
import { Spinner, Card } from "react-bootstrap";
const MeteoCard = function (props) {
  const [loading, setLoading] = useState(true);

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
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  useEffect(() => {
    getMeteo();
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="info"></Spinner>
        </div>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MeteoCard;
