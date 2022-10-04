import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state)=> state.allProducts.products);
  
  const renderList = products.map((product)=>{
    return (
      <Link to={`/product/${product.id}`}>
    <div className="card" key={product.id}>
    <div className="card-body productCard" >
      <img src={product.image}  style={{height: 200, width: 150}}/>
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary">Product Detail </a>
    </div>
  </div>
  </Link>
    );
    
  });
  return (
    <>
      {renderList}
    </>
  )
}

export default ProductComponent;