import React from 'react'
import Card from '../skill/Card'
import Timeline from './Timeline'
const Skill = ({contentcard, timelinecontent}) => {
  return (
    <div className='dark:bg-black dark:text-light'>
      <div className="w-full h-16 py-1 text-center mx-auto">
      <div className="flex justify-center my-3">
      {/* About Us Heading */}
      <h3 className='font-semibold text-4xl -mt-1 mr-1'>|</h3>
      <h3 className='text-4xl font-bold'>Skill <span className='text-[30px] text-lightb dark:text-darko'>&</span> Experience</h3>
      </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-8">
      <Card card={contentcard}/>
      <Timeline timeline = {timelinecontent}/>
      </div>
    </div>
  )
}

export default Skill
