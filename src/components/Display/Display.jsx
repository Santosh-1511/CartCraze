import React, { useContext} from 'react'
import './Display.css'
import star_dull_icon from '../Assets/star.png'
import star_icon from '../Assets/star light.png'
import { CollectionContext } from '../../context/CollectionContext'

const Display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(CollectionContext);
  return (
    <div className='display'>
      <div className="display-left">
        
        <div className="display-img">
            <img className='display-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(125)</p>
        </div>
        <div className="display-right-prices">
            <div className="display-right-price-old">${product.old_price}</div>
            <div className="display-right-price-new">${product.new_price}</div>
        </div>
        {/* <div className="display-right-description">


        </div> */}
        <div className="display-right-size">
            <h1>Select Size</h1>
                <div className="display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
         </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
         
      </div>
    </div>
  )
}

export default Display
