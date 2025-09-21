const Imagecards = ({ img, name, description }) => {
  return (
    <div className="image-card">
      <img className="shoe-image" src={img} alt={name} />
      <p className="shoe-name">{name}</p>
      <p className="shoe-description">{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default Imagecards;
