import { useContext } from 'react'
import React from 'react'
import { CollectionContext } from '../context/CollectionContext'
import {useParams} from 'react-router-dom'
import Uk from '../components/Uk/Uk'
import Display from '../components/Display/Display'
import DescriptionBox from '../components/Description/DescriptionBox'
import Similar from '../components/similar/similar'
const Product = () => {
  const {all_product}=useContext(CollectionContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Uk product={product}/>
      <Display product={product}/>
      <DescriptionBox />
      <Similar/>
    </div>
  )
}

export default Product
