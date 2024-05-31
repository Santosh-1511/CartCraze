import React from 'react'
import './Uk.css'
import arrow_icon from '../Assets/arrow_icon.png'
const Uk = (props) => {
    const { product } = props;
  return (
    <div className='Uk'>
      HOME <img src={arrow_icon} alt="" /> COLLECTION <img  src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt=""/> {product.name}
      
    </div>
  );
}

export default Uk;
