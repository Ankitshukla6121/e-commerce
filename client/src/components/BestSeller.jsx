import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => { 
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProducts = products.filter((item) => (item.bestSeller))
    setBestSeller(bestProducts.slice(0, 5))
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Our best-selling pieces combine comfort, quality, and style. Loved by thousands, they’re versatile, trendy, and perfect for everyday wear and special occasions.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map(item => (
          <ProductItem 
             key={item._id}
            id={item._id} 
            name={item.name} 
            image={item.images} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
