import React from 'react'


const Card = ({icons, title,description}) => {
  return (
    <div className='bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300'>
        <div className="icons text-4xl mb-3">{icons}</div>
        <h1 className='title text-lg font-semibold text-gray-800 mb-2'>{title}</h1>
        <p className='description text-gray-600 text-s'>{description}</p>
    </div>
  )
}

export default Card