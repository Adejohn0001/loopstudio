import React from 'react'

const Button = ( { title } ) => {
  return (
    <div>
        <button className='border-2 border-black p-1 pl-8 pr-8 hover:bg-purple-500 hover:text-white '> { title } </button>
    </div>
  )
}

export default Button