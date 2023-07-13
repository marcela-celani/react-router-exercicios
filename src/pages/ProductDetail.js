import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

const params = useParams()

  return (
    <div>
      <h1>Product details</h1>
      <h2>{params.id}</h2>
    </div>
  )
}

export default ProductDetail
