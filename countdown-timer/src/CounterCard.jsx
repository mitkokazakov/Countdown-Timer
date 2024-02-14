import React from 'react'

export const CounterCard = ({name}) => {

  return (

    <div className='flex flex-col justify-center items-center gap-5'>
      
      <div className=' relative w-32 h-32 shadow-[0px_10px_5px_0px_rgba(0,0,0,0.5)]'>

        <div className=' bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute top-0 left-0 rounded-t-md' id='top'>
            <p className=' absolute bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]'>7</p>
        </div>

        <div className=' bg-[#2c2c44] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute top-0 left-0 animate-flipDown origin-bottom rounded-t-md' id='flip-top'>
            <p className=' absolute bottom-[-85%] left-[50%] translate-x-[-50%] text-[#d44e71]'>4</p>
        </div>

        <div className=' bg-[#34364f] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute bottom-0 left-0 rounded-b-md' id='bottom'>
            <p className=' absolute top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]'>4</p>
        </div>

        <div className=' bg-[#34364f] w-full h-1/2 overflow-hidden text-[70px] font-extrabold absolute bottom-0 left-0 origin-top rounded-b-md animate-flipUp' id='flip-bottom'>
            <p className=' absolute top-[-80%] left-[50%] translate-x-[-50%] text-[#f85d85]'>4</p>
        </div>

      </div>

      <p className=' text-white tracking-widest'>{name}</p>
    </div>
  )
}

