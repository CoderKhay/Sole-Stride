import Founder from "../assets/Images/founder.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="left-content-container">
        <img src={Founder} alt="Founder" />
        <h3>SOLESTRIDE</h3>
      </div>
      <nav className="navigation"></nav>
      <div className="hamburger-menu"></div>
    </header>
  );
};

export default Header;
