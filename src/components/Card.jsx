import React from 'react'
import "../index.css"


function Card({children, className, ...props}) {
  return (
    <div className={`border border-gray-500 p-4 rounded-lg shadow-md bg-white w-full} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card