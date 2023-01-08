import React from 'react'
import hamburger from '../../src/images/icon-hamburger.svg'

const Hamburger = () => {
  return (
    <div>
        <button className='mt-2'>
            <img src={hamburger} alt="Hamburger" />
        </button>
    </div>
  )
}

export default Hamburger