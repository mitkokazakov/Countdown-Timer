import React from 'react'

import starsImage from './images/bg-stars.svg';
import { Timer } from './Timer';
import { Footer } from './Footer';

const Wrapper = () => {

  let style = {
    backgroundImage: `url(${starsImage})`
  };

  console.log('Hi from wrapper');

  return (
    <div className=' min-h-screen w-full flex flex-col justify-between items-center relative pt-[100px] md:pt-[150px]' style={style}>

      <div className='w-full flex flex-col justify-center items-center gap-28'>

        <h1 className=' text-white font-bold text-xl tracking-[4px]'>WE ARE LAUNCHING SOON</h1>

        <Timer />

      </div>

      <Footer />
    </div>
  )
}

export default Wrapper
