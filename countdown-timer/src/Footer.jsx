import React from 'react'

import hillsImage from './images/pattern-hills.svg';

import facebook from './images/icon-facebook.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

let styles = {
    backgroundImage: `url(${hillsImage})`
}

export const Footer = () => {
  return (
    <div className='w-full min-h-[200px] bg-cover bg-right-bottom absolute bottom-0 left-0 flex justify-center items-center' style={styles}>
        <div className='flex flex-row w-64 justify-between'>
            <img className='h-10 w-10 hover:text-[#fb6087]' src={facebook} alt="" />
            <img className='h-10 w-10' src={pinterest} alt="" />
            <img className='h-10 w-10' src={instagram} alt="" />
        </div>
    </div>
  )
}
