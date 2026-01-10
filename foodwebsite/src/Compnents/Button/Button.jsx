import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' bg-gradient-to-b from-orange-400 to-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-30 px-6 hover:shadow-lg hover:scale-105  cursor-pointer '>
        {props.content}
      </button>
    </div>
  )
}

export default Button
