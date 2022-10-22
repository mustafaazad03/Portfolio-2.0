import React from 'react'
import Card from '../skill/Card'
import Timeline from './Timeline'
const Skill = () => {
  return (
    <>
      <div className="w-full h-16 py-1 text-center mx-auto dark:bg-black">
      <h3 className="font-bold dark:text-light text-2xl"><span className='text-lightb dark:text-darko'>S</span>kills And <span className='text-lightb dark:text-darko'>E</span>xperience</h3>
      <div className="w-36 mx-auto my-1 rounded-3xl h-1 bg-lightb dark:bg-darko"></div>
      </div>
      <div className="">
      <Card/>
      <Timeline/>
      </div>
    </>
  )
}

export default Skill
