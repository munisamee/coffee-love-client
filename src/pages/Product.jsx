import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React, { useState } from 'react';
// import './ProductCard.css'; // Assuming you have a separate CSS file for styling

// const ProductCard = ({ imgUrl, altText, productName }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     // Here you would typically implement logic to add the product to the cart
//     // For demonstration purposes, let's just log the quantity and product name
//     console.log('Product added to cart:', productName, 'with quantity:', quantity);
//   };

//   return (
//     <div className="product-card">
//       <img src={imgUrl} alt={altText} className="product-image" />
//       <h3>{productName}</h3>
//       <div>
//         <label htmlFor="quantity">Quantity:</label>
//         <button onClick={handleDecrement}>-</button>
//         <input type="number" id="quantity" value={quantity} readOnly />
//         <button onClick={handleIncrement}>+</button>
//       </div>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;

const CoffeeProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/coffee/hot');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Coffee Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeProductListPage;
