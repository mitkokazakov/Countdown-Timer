import React from 'react'

import starsImage from './images/bg-stars.svg';

const Wrapper = () => {

    let style = {
        backgroundImage: `url(${starsImage})`
    };

  return (
    <div className=' h-full' style={style}>
      
    </div>
  )
}

export default Wrapper
