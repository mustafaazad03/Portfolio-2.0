import Image from 'next/image'
import React from 'react'
import { Footer } from '../components/Foot'
import Pcard from '../components/project/Pcard'
import { sanityClient } from '../sanity'
import { getFooter, getProject } from '../utils/queries'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const project = ({foot, proj}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <>
        <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1,bounce : 2, bounceDamping:1}} className="block absolute z-50 w-20 h-20 ml-10">
            <Image
                width="100%"
                height="100%"
                src="/logodark.png"
                alt="Logo"
            />
        </motion.div>
        <section className="relative bg-[url(https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?cs=srgb&dl=pexels-fauxels-3183171.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-light/70 sm:bg-light/0 sm:bg-gradient-to-r sm:from-light/75 sm:to-black/0"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                    <motion.h1 ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.2}} className="text-3xl font-bold sm:text-5xl">
                        Let's Have A Look On
                        <strong className="block font-extrabold text-lightb">
                            My Activities
                        </strong>
                    </motion.h1>
                    <motion.p ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.3}} className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        This Projects Are Very Important Aspect Of My Learning Journey And Help Me To Improve My Skill<br/>"<em>Knowledge is not power, implementation is power</em>"<br/><span className='font-semibold'>~ Garrison Wynn ~</span>
                    </motion.p>
                    <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1.2, delay : 0.45}} className="mt-8 flex flex-wrap gap-4 text-center">
                        <a href="/" className="block w-full rounded-2xl bg-lightb/90 px-12 py-3 font-semibold text-light hover:bg-lightb shadow focus:outline-none focus:ring active:bg-lightb sm:w-auto">
                        Home
                        </a>
                        <a href="/contact" className="block w-full rounded-2xl bg-light/90 hover:bg-light px-12 py-3 font-semibold text-lightb shadow focus:outline-none focus:ring active:text-lightb sm:w-auto">
                        Contact
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
        <h3 className="font-semibold text-[2.5rem] z-50 dark:bg-black dark:text-light text-center py-4">
			My <span className="text-5xl text-lightb dark:text-darko font-bold">Project</span>
		</h3>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 dark:bg-black lg:grid-cols-3"> */}
        <Pcard pcard = {proj}/>
        {/* </div> */}
        <Footer data = {foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
    </>
  )
}

export default project

export const getServerSideProps = async () => {
const foot = await sanityClient.fetch(getFooter)
const proj = await sanityClient.fetch(getProject)
return {
    props : {
        foot,
        proj
    }
}
}