import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
       <div className='p-6'>
        <h3 className='text-6xl font-bold mb-7'>Prospective <br/><Span className= 'text-gray-600'>Customer</Span> <br/>Segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste corporis impedit esse doloribus eaque quidem asperiores laboriosam architecto sunt?</p>
       </div>
      <div className='text-9xl'>
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  )
}

export default LeftContent
