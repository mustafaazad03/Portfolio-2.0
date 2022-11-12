import React from 'react'
import { urlFor } from '../../sanity'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Bcard = ({cardD}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
    <motion.div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 mx-auto">
        {cardD.map((value,idx) => {
            return (
        <article key={idx} className="flex bg-white transition hover:shadow-xl mb-6 sm:mb-0 justify-center mx-auto w-[90%]">
        <motion.div animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1.2}} className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
            dateTime="2022-11-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
            <span>{value.year}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{value.month}</span>
            </time>
        </motion.div>
        <div className="flex flex-col sm:block">
        <motion.div animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1.2, delay : 0.1}} className="block basis-56 overflow-hidden">
            <img
            alt={value.title}
            src={urlFor(value?.img).url()}
            className="aspect-square h-full w-full object-cover hover:scale-105 hover:ease-in-out"
            />
        </motion.div>

        <motion.div animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.2}} className="flex flex-1 flex-col justify-between">
            <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href={`/post/${value.slug.current}`} className='group'>
                <h3 className="font-bold uppercase text-gray-900">
                {value.title}
                </h3>
            </a>

            <p className="mt-2 hidden sm:block text-sm leading-relaxed text-gray-700 line-clamp-3">
                {value.desc}
            </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href={`/post/${value.slug.current}`}
                className="block group bg-lightb/75 shadow-sm px-5 py-3 text-center text-xs font-bold uppercase text-light transition rounded-l-3xl hover:bg-lightb"
            >
                Read Blog
            </a>
            </div>
            </motion.div>
        </div>
        </article>
            )
        })}
    </motion.div>
  )
}

export default Bcard