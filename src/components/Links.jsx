import React from 'react'

const Links = () => {
  return (
    <div>
        <ul className='text-lg flex flex-col list-none text-white mt-2 text-center md:flex-row md:text-xs'>
            <li className='mt-2 md:mr-6 mt-0' ><a href="https://www.google.com">About</a></li>
            <li className='mt-2 md:mr-6 mt-0' ><a href="https://www.google.com">Careers</a></li>
            <li className='mt-2 md:mr-6 mt-0' ><a href="https://www.google.com">Events</a></li>
            <li className='mt-2 md:mr-6 mt-0' ><a href="https://www.google.com">Products</a></li>
            <li className='mt-2 md:mr-6 mt-0' ><a href="https://www.google.com">Support</a></li>
        </ul>
    </div>
  )
}

export default Links