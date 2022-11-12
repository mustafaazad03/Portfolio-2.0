import React from 'react'
import Circular from './Circular'
import Line from './Line'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Progress = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const prog = [
        {
            name : 'MERN Development', percent : '70'
        },
        {
            name : 'C++ Programming', percent : '60'
        },
        {
            name : 'Java Programming', percent : '50'
        },
        {
            name : 'Blockchain Development', percent : '25'
        },
    ]
    
    return (
        <div className='dark:bg-black dark:text-light h-auto'>
            <div className="w-full h-16 py-1 text-center mx-auto">
                <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2}} className="flex justify-center my-3">
                    {/* About Us Heading */}
                    <h3 className='font-semibold text-4xl -mt-1 mr-1'>|</h3>
                    <h3 className='text-4xl font-bold'><span className='text-[38px] text-lightb dark:text-darko'>P</span>rogress</h3>
                </motion.div>
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:py-20 py-10">
                <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.2}} className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:-mt-6 mt-10 xl:gap-12 lg:gap-10 gap-12 xl:ml-12 lg:ml-4">
                    <Circular/>
                </motion.div>
                <div className="md:ml-16">
                    <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.2}} className="space-y-10 mt-2">
                        {prog.map((value,idx) => {
                            return (
                                <div key={idx} className="space-y-2">
                                    <h3 className='font-semibold text-lg ml-8 md:ml-0'>{value.name}</h3>
                                    <Line percent={value.percent}/>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
        
    )
}

export default Progress
