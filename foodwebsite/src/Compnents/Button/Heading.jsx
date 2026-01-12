import React from 'react'


const Heading = (prop) => {
  return (
    <div>
      <h2 className="md:text-3xl font-bold text-center mb-8 text-5xl"><span className='text-orange-400'> {prop.head}</span> {prop.text1} <span className='underline decoration-orange-600'>{prop.text2}</span></h2>

    </div>
  )
}








export default Heading
