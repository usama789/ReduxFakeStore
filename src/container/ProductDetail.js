import {React,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedProducts } from '../redux/action/ProductActions';
const ProductDetail = () => {
  const {productid} = useParams();
  console.log(productid);
  const product = useSelector((state)=> state.product);
  const dispatch = useDispatch();
  const fetchProductDetail = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err)=> console.log(err));
    dispatch(selectedProducts(response.data));
    console.log(response.data);
  }
  useEffect(() => {
    if(productid != ""){
      fetchProductDetail()
    }
  }, [])
  return (
    <div>
      <div className="card" key={product.id}>
    <div className="card-body productCard" >
      <img src={product.image}  style={{height: 200, width: 150}}/>
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="/" className="btn btn-primary">See All Products</a>
    </div>
  </div>
    </div>
  )
}

export default ProductDetail;