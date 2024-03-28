import React, { useState } from 'react';

const AddToCartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Here you would typically implement logic to add the product to the cart
    // For demonstration purposes, let's just log the quantity
    console.log('Product added to cart with quantity:', quantity);
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <button onClick={handleDecrement}>-</button>
        <input type="number" id="quantity" value={quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartPage;
