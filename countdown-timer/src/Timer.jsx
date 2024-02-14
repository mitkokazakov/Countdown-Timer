import React from 'react'
import { CounterCard } from './CounterCard'

export const Timer = () => {
  return (
    <div className='w-full flex flex-row justify-center items-center gap-10 flex-wrap'>

      <CounterCard name={"DAYS"}/>
      <CounterCard name={"HOURS"}/>
      <CounterCard name={"MINUTES"}/>
      <CounterCard name={"SECONDS"}/>
    </div>
  )
}
