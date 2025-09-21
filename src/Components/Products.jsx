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
    <>
      <h3 className="featured-products-title">Featured Products</h3>
      <div className="cards-container">{craftedShoes}</div>
    </>
  );
};

export default Products;
