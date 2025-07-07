import { useState } from "react";
import Button from "./Button";
import "./components.css";

type Card = {
  name: string;
  price: number;
  image: string;
};

function ProductCard({ name, price, image }: Card) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(0); // Jika quantity jadi 0, kembali ke tombol "Add to Cart"
    }
  };

  return (
    <li>
      <div className="card">
        <img className="image" src={image} alt={name} />
        <div className="description">
          <h2>{name}</h2>
          <p>Price: Rp. {price},00</p>

          {quantity === 0 ? (
            <Button text="Add to Cart" onClick={handleAddToCart} />
          ) : (
            <div className="counter">
              <Button text="-" onClick={decreaseQuantity} />
              <span>Quantity: {quantity}</span>
              <Button text="+" onClick={increaseQuantity} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
