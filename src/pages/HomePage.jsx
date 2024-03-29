// const imgURL = "https://www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002//www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002&w=900";
// const imgURL1 = "https://img.freepik.com/free-photo/plastic-cup-coffee-bag_23-2147729442.jpg?size=626&ext=jpg";
// const imgURL2 = "https://img.freepik.com/free-psd/coffee-bags-mockup-gravity-psd_15879-598.jpg?w=1480&t=st=1711725159~exp=1711725759~hmac=64ea8f1b1d8b198f11fba989d23bfed032f27127c48c2b7d55ebbbd01d7b2f25";
// const imgURL3 = "https://img.freepik.com/free-vector/hand-drawn-coffee-label-packaging_23-2149730748.jpg?w=1480&t=st=1711725378~exp=1711725978~hmac=8112e7c26ac9d453f53ed2bc4adc24d109a6e3b785e6bda54f71f982c9fee40f";
// const imgURL4 = "https://img.freepik.com/premium-psd/mockup-coffee-cups-bag_23-2147758197.jpg?w=1480";
// const imgURL5 = "https://img.freepik.com/premium-psd/paper-coffee-bag-packaging-mockup_47987-4039.jpg?w=1380";
// const imgURL6 = "https://img.freepik.com/free-psd/colorful-product-packaging-sachet-mockup_53876-76388.jpg?w=1480&t=st=1711725646~exp=1711726246~hmac=b6afe706e63584c6ecc3a8ce08b9947a713d53b7ef6b65fe3ce7317de25cc8f4";
// const imgURL7 = "https://img.freepik.com/premium-psd/free-psd-coffee-packaging-mockup-template_1047433-40.jpg?w=1060";
// const imgURL8 = "https://img.freepik.com/premium-psd/eco-packaging-coffee-paper-bag-mockup-premium-psd_311128-90.jpg?w=1480";
// const imgURL9 = "https://img.freepik.com/premium-psd/glossy-paper-coffee-bag-branding-mockup_47987-10010.jpg?w=826";
 
// function HomePage() {
//   return (
//     <div>
//       <h1>Coffee Love Bar</h1>
//       <img src={imgURL} alt="coffee one" className="page-img" />
//       <img src={imgURL1} alt="coffee two" className="page-img" /> 
//       <img src={imgURL2} alt="coffee three" className="page-img" /> 
//       <img src={imgURL3} alt="coffee four" className="page-img" /> 
//       <img src={imgURL4} alt="coffee five" className="page-img" /> 
//       <img src={imgURL5} alt="coffee six" className="page-img" /> 
//       <img src={imgURL6} alt="coffee seven" className="page-img" /> 
//       <img src={imgURL7} alt="coffee eight" className="page-img" /> 
//       <img src={imgURL8} alt="coffee nine" className="page-img" /> 
//       <img src={imgURL9} alt="coffee ten" className="page-img" /> 
//     </div>
//   );
// }
 
// export default HomePage;

// import React from 'react';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling
import React from 'react';
import { Link } from 'react-router-dom';

const imgURL = "https://www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002//www.peets.com/cdn/shop/products/YOS-M_1.png?v=1612372002&w=900";
const imgURL1 = "https://img.freepik.com/free-photo/plastic-cup-coffee-bag_23-2147729442.jpg?size=626&ext=jpg";
const imgURL2 = "https://img.freepik.com/free-psd/coffee-bags-mockup-gravity-psd_15879-598.jpg?w=1480&t=st=1711725159~exp=1711725759~hmac=64ea8f1b1d8b198f11fba989d23bfed032f27127c48c2b7d55ebbbd01d7b2f25";
const imgURL3 = "https://img.freepik.com/free-vector/hand-drawn-coffee-label-packaging_23-2149730748.jpg?w=1480&t=st=1711725378~exp=1711725978~hmac=8112e7c26ac9d453f53ed2bc4adc24d109a6e3b785e6bda54f71f982c9fee40f";
const imgURL4 = "https://img.freepik.com/premium-psd/mockup-coffee-cups-bag_23-2147758197.jpg?w=1480";
const imgURL5 = "https://img.freepik.com/premium-psd/paper-coffee-bag-packaging-mockup_47987-4039.jpg?w=1380";
const imgURL6 = "https://img.freepik.com/free-psd/colorful-product-packaging-sachet-mockup_53876-76388.jpg?w=1480&t=st=1711725646~exp=1711726246~hmac=b6afe706e63584c6ecc3a8ce08b9947a713d53b7ef6b65fe3ce7317de25cc8f4";
const imgURL7 = "https://img.freepik.com/premium-psd/free-psd-coffee-packaging-mockup-template_1047433-40.jpg?w=1060";
const imgURL8 = "https://img.freepik.com/premium-psd/eco-packaging-coffee-paper-bag-mockup-premium-psd_311128-90.jpg?w=1480";
const imgURL9 = "https://img.freepik.com/premium-psd/glossy-paper-coffee-bag-branding-mockup_47987-10010.jpg?w=826";

// Define prices for each image
const prices = {
  [imgURL]: "$10",
  [imgURL1]: "$8",
  [imgURL2]: "$12",
  [imgURL3]: "$9",
  [imgURL4]: "$15",
  [imgURL5]: "$11",
  [imgURL6]: "$13",
  [imgURL7]: "$10",
  [imgURL8]: "$14",
  [imgURL9]: "$9"
};

function HomePage() {
  return (
    <div className="home-page">
      <h1>Coffee Love Bar</h1>
      <div className="product-grid">
        <div className="product-item">
          <img src={imgURL} alt="coffee one" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL1} alt="coffee two" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL1]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL2} alt="coffee three" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL2]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL3} alt="coffee four" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL3]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL4} alt="coffee five" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL4]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL5} alt="coffee six" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL5]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL6} alt="coffee seven" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL6]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL7} alt="coffee eight" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL7]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL8} alt="coffee nine" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL8]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        <div className="product-item">
          <img src={imgURL9} alt="coffee ten" className="page-img" />
          <div className="product-details">
            <span className="price">{prices[imgURL9]}</span>
            <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
          </div>
        </div>
        {/* Repeat for the rest of the images */}
      </div>
    </div>
  );
}

export default HomePage;
// function HomePage() {
//   return (
//     <div className="home-page">
//       <h1>Coffee Love Bar</h1>
//       <div className="product-grid">
//         <div className="product-item">
//           <img src={imgURL} alt="coffee one" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL1} alt="coffee two" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL2} alt="coffee three" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL3} alt="coffee four" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL4} alt="coffee five" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL5} alt="coffee six" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL6} alt="coffee seven" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL7} alt="coffee eight" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//           <div className="product-item">
//           <img src={imgURL8} alt="coffee nine" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         <div className="product-item">
//           <img src={imgURL9} alt="coffee ten" className="page-img" />
//           <Link to="/checkout" className="add-to-cart-btn">Add to Cart</Link>
//         </div>
//         </div>
//         {/* Add more product items as needed */}
//       </div>
//     </div>
//   );
// }

// export default HomePage;