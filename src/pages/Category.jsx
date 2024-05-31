import React, {useContext} from 'react'
import './CSS/Category.css'
import { CollectionContext } from '../context/CollectionContext'
import dropdown_icon from '../components/Assets/dropdownicon.png'
import Item from '../components/items/item'
const CollectionCategory = (props) => {
  const {all_product}= useContext(CollectionContext);
  return (
    <div className='Category'>
      <img className="collectioncategory-banner" src={props.banner} alt="" />
      <div className="collectioncategory-indexSort">
        <p>
          <span>Showing 8</span> out of 24 products  
        </p>
        <div className="collectioncategory-sort">
          
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="collectioncategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
              return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="collectioncategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default CollectionCategory
