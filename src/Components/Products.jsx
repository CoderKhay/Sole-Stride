import shoes from "../assets/samples";
import Imagecards from "./Image-cards";

const Products = () => {
  const craftedShoes = shoes.map((shoe) => (
    <Imagecards
      key={shoe.id}
      img={shoe.imgUrl}
      name={shoe.name}
      description={shoe.description}
    />
  ));

  return (
    <div className="cards-container">
      <h3>Featured Products</h3>
      {craftedShoes}
    </div>
  );
};

export default Products;
