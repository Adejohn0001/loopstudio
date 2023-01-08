import React from 'react'

const Creationimg = ( { image, name, subname } ) => {
  return (
    <div className='max-w-none'>
        <img src={ image } alt=""  className='mb-[90px] w-full md:w-[200px]'/>
        <p className='relative mt-[-180px] text-white font-light text-3xl pb-[10px] w-[85%] pl-[20px] uppercase md:relative md:mt-[-180px] md:text-white md:font-light md:text-3xl md:pb-[50px] md:w-[85%] md:pl-[35px] md:uppercase'> { name } <br /> <span> { subname }</span></p>
    </div>
  )
}

export default Creationimg