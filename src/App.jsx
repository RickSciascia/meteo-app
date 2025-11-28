import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNavbar />
      <Home />
      <MyFooter />
    </>
  );
}

export default App;
