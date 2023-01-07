import React from 'react'

const Creationimg = ( { image, name } ) => {
  return (
    <div className='w-[220px]'>
        <img src={ image } alt=""  className='mb-[90px]'/>
        <p className='relative mt-[-180px] text-white font-light text-3xl pb-[50px] w-[85%] pl-[50px] uppercase'> { name } </p>
    </div>
  )
}

export default Creationimg