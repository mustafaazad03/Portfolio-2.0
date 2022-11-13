import React from 'react'
import Bcard from '../components/blogs/Bcard'
import Image from 'next/image'
import { sanityClient } from '../sanity'
import { getBlogsCard } from '../utils/queries'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NextSeo } from 'next-seo'
const blogs = ({bcard}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <>
    <NextSeo 
      title="Blogs Section Of Mustafa"
      description="This is my Blogs section, So stay tune with new and latest info about tech universe."
      canonical="https://www.mustafaazad.me/blogs"
      openGraph={{
        siteName : "mustafaazad",
        url : "https://www.mustafaazad.me/blogs",
        releaseDate: '2022-11-11T22:04:11Z',
        tags: ['mustafaazad', 'mustafa', 'azad','blogs','blog','hackers','cyber','security','devs','develope','learn','knowlwdge','me', 'nextjs', 'collage', 'ietdavv','indore', 'madhyapardesh', 'india', 'sanity', 'sanityio','skill','portfolio', 'website','dev', 'developer','amazing','wow','tailwind','css','react','javascript', 'experience', 'working'],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://www.mustafaazad.me/favicon.ico',
        },
      ]}
      />
    <motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], scale: isInView ? [0,1]: [0,0]}} transition={{duration : 1,bounce : 2, bounceDamping:1}} className="block absolute z-50 w-20 h-20 ml-10">
        <Image
            width="100%"
            height="100%"
            className="w-full h-full"
            src="/logodark.png"
            alt='Logo'
        />
    </motion.div>
    <section className="relative bg-[url(https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?cs=srgb&dl=pexels-picography-4458.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-light/70 sm:bg-light/0 sm:bg-gradient-to-r sm:from-light/90 sm:to-black/0"></div>
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-4xl sm:text-left">
            <motion.h1 ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.2}} className="text-3xl font-bold sm:text-5xl">
                Relavent Information 
                <strong className="block font-extrabold text-lightb">
                    My Blogs
                </strong>
            </motion.h1>
            <motion.p ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.3}} className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                This Projects Are Very Important Aspect Of My Learning Journey And Help Me To Improve My Skill<br/>&quot;<em>The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge</em>&quot;<br/><span className="font-semibold">~ Daniel J. Boorstin ~</span>
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
        <Bcard cardD = {bcard}/>
    </>
  )
}

export default blogs

export const getServerSideProps = async () => {
    const bcard = await sanityClient.fetch(getBlogsCard)
    return {
        props : {
            bcard
        }
    }
}