import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Pcard = ({pcard}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 dark:bg-black lg:grid-cols-3">
        {pcard.map((value,idx) => (   
            <Link  href={value.link} key={idx} className='group cursor-pointer'>
            <article className="group px-4">
        <motion.img  animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1.2,delay:0.1}}
            alt="Project"
            src={urlFor(value?.img).url()}
            loading='lazy'
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
            <a href="#">
            <motion.h3 animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.15}} className="text-lg font-medium text-gray-900">
                {value.name}
            </motion.h3>
            </a>

            <motion.p animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.25}} className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {value.desc}
            </motion.p>
        </div>
        </article>
        </Link>
        ))}
    </motion.div>
  )
}

export default Pcard