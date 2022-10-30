import "./App.css";
/*
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
*/

import { Header, Container, Footer } from "./components/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>content</Container>
      <Footer />
    </>
  );
};

export default App;
