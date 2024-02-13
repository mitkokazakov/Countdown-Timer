import React from 'react'

import starsImage from './images/bg-stars.svg';
import { Timer } from './Timer';
import { Footer } from './Footer';

const Wrapper = () => {

  let style = {
    backgroundImage: `url(${starsImage})`
  };

  return (
    <div className=' min-h-screen w-full flex flex-col justify-between items-center relative pt-[200px]' style={style}>

      <div className='w-full flex flex-col justify-center items-center gap-32'>
        <h1 className=' text-white font-bold text-xl tracking-[4px]'>WE ARE LAUNCHING SOON</h1>

        <Timer />
      </div>

      <Footer />
    </div>
  )
}

export default Wrapper
