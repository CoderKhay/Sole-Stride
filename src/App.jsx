import Header from "./Components/Header";
import Main from "./Components/Main";
import Products from "./Components/Products";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <hr className="rule" />
      <Products />
      <hr className="rule" />
      <Reviews />
      <hr className="rule" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
