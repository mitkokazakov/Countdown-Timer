import React from 'react'

import hillsImage from './images/pattern-hills.svg';

let styles = {
    backgroundImage: `url(${hillsImage})`
}

export const Footer = () => {
  return (
    <div className='w-full min-h-[200px] bg-cover bg-right-bottom absolute bottom-0 left-0 flex justify-center items-center' style={styles}>
        <div className='flex flex-row w-64 justify-between'>
            <i className="fa-brands fa-facebook text-[36px] text-slate-400 hover:text-[#fb6087] duration-300"></i>
            <i className="fa-brands fa-pinterest text-[36px] text-slate-400 hover:text-[#fb6087] duration-300"></i>
            <i className="fa-brands fa-square-instagram text-[36px] text-slate-400 hover:text-[#fb6087] duration-300"></i>
        </div>
    </div>
  )
}
