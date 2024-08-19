import React, { useState } from "react";
import './Item.css';

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle item in/out of the cart
  const handleButtonClick = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    < li className = { inCart? "in-cart": "" } >
    <span>{name}</span>
    <span className="category">{category}</span>
    <button className="add" onClick={handleButtonClick}>
      {inCart ? "Remove From Cart" : "Add to Cart"} Cart
    </button>
  </li >
  );
}

export default Item;
