import React from 'react'

import starsImage from './images/bg-stars.svg';
import { Timer } from './Timer';
import { Footer } from './Footer';

const Wrapper = () => {

  let style = {
    backgroundImage: `url(${starsImage})`
  };


  return (
    <div className=' min-h-screen w-full flex flex-col justify-normal items-center relative pt-[50px] md:pt-[50px]' style={style}>

      <div className='w-full flex flex-col justify-center items-center gap-24'>

        <h1 className=' text-white font-bold text-xl tracking-[4px] w-80 md:w-96 text-center'>WE ARE LAUNCHING SOON</h1>

        <Timer />

      </div>

      <Footer />
    </div>
  )
}

export default Wrapper
