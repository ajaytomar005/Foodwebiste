import React from 'react'
import { FaHeart } from "react-icons/fa";

const ValueCard1 = () => {
  return (
    <div className='  w-60 h-auto text-right flex gap-2' >
      <div className='flex  flex-col px-3'>
        {/*left with heading and paragraph*/}

        <h1 className='text-3xl font-bold  '>Trust</h1>
        <p className='text-gray-600    mt-2 text-[12px]  font-semibold'>We prioritize your satisfaction and work hard to earn your trust through reliable service and quality products.</p>
      </div>

      <div className=' flex justify-center items-center flex-col'>
        {/*right with image*/}<FaHeart className='text-4xl text-orange-800 mt-2' />

      </div>
    </div>
  )
}

export default ValueCard1
