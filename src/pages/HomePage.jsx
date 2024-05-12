import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { productsArray } from './Productlist';
import ProductCard from '../components/ProductCard';


function HomePage() {
  return (
    // <div className="home-page">
    <>
      <h1 align="center" className="p-3">Coffee Love Bar</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product) => (
                  <Col align="center" key={product.id} >
                  <ProductCard product={product}/>
                  {/* <img src={product.img} alt="img" className="img-fluid w-50 h-30"/> */}
                 </Col> 
                 
                 )) }
     </Row>

       </>
       )
    }   

export default HomePage;