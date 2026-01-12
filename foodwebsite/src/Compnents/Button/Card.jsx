import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-full  p-4 hover:scale-[1.02] bg-blue-800">
      <div className="text-center h-auto  flex flex-col justify-center items-center ">

        {/* //<img src={props.image} alt={props.title} className="w-full h-48 object-cover rounded-md mb-4" /> */}
        <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-5">{props.description}</p>
       <Button content={"Shop Now"} />

      </div>
    </div>
  )
}

export default Card
