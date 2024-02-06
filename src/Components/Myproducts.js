import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxManager/Action';


const Myproducts = () => {
  const [productData, setProductData] = useState([]);

  const dispatch= useDispatch();

  const getProduct = () => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      console.log("fetch products", response.data.products);
      setProductData(response.data.products);
    })
  }


  const handleAddToCart=(item)=>{
    console.log("added");
    dispatch(addToCart(item))
  }



  useEffect(() => {
    getProduct()
  }, [])



  return (
    <div className='product-container'>
      {productData.map((item, i) => {
        return (
          <div className="product-card" key={i}>
            <div className='img-container'>
                  <img src={item.thumbnail} alt="" />
                </div>
            <div>
              {item.brand}
            </div>
            <div>
              {item.title}
            </div>
            <div>
              {item.price}
            </div>
            <div>
            <Button variant="outline-info" onClick={()=>handleAddToCart(item)}>Add to Cart</Button>{' '}
            </div>
          </div>
        )
      })

      }
    </div>
  )
}

export default Myproducts
