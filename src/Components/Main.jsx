import Typewriter from "typewriter-effect";
import Hero from "../assets/Images/hero.jpg";

const Main = () => {
  return (
    <main>
      <img src={Hero} alt="Hero" className="hero-image" />

      <div className="content">
        <h4 className="greetings">Welcome to SoleStride 😘</h4>

        <div className="type-writer-container">
          <Typewriter
            className="typewriter-text"
            options={{
              strings: [
                "A place where craftsmanship...",
                "meets timeless design.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="wordOfConfidence">
          Transform your footwear into works of art with soleStride's expert
          shoemaking and repair services.
        </p>

        <button className="explore-button">Explore Our Craft &rarr;</button>
      </div>
    </main>
  );
};

export default Main;
