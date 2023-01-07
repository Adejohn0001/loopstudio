import React from 'react'

const Button = ( { title } ) => {
  return (
    <div>
        <button className='border-2 border-black p-1 pl-8 pr-8'> { title } </button>
    </div>
  )
}

export default Button