import React from 'react'
import Hero from './custom_components/Hero'
import ServiceCard from './custom_components/ServiceCard'
import ProductCard from './custom_components/ProductCard'

export const LandingPage = () => {
  return (
    <div className='h-fit flex flex-col justify-start items-center'>
      <Hero/>
      <div className='w-full h-[100vh] text-center' id='services'>
        <p className='text-2xl font-semibold my-[15vh]'>What we provide?</p>
        <div className='flex justify-center items-center p-2'>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </div>
      </div>
      <div className='w-full h-fit-content text-center'>
        <p className='text-2xl font-semibold mb-[15vh]'>Which products are you looking for?</p>
        <div className='flex justify-center items-center mb-[30vh]'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
      <div className='w-full h-[100vh] text-center flex-col justify-center items-center' id='services'>
        <p className='text-2xl font-semibold'>How to place your order?</p>
         <div className='border-2 border-gray-200 w-[92vw] h-[40vh] rounded-2xl my-[10vh] ml-[8vh]'>

         </div>
      </div>
    </div> 
  )
}
