import React from 'react'
import Card from '../skill/Card'
import Timeline from './Timeline'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Skill = ({contentcard, timelinecontent}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='dark:bg-black dark:text-light'>
      <div className="w-full h-16 py-1 text-center mx-auto">
      <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1}} className="flex justify-center my-3">
      {/* About Us Heading */}
      <h3 className='font-semibold text-4xl -mt-1 mr-1'>|</h3>
      <h3 className='text-4xl font-bold'>Skill <span className='text-[30px] text-lightb dark:text-darko'>&</span> Experience</h3>
      </motion.div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-8">
      <Card card={contentcard}/>
      <Timeline timeline = {timelinecontent}/>
      </div>
    </div>
  )
}

export default Skill
