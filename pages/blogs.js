import React from 'react'
import Bcard from '../components/blogs/Bcard'
import Image from 'next/image'
const blogs = () => {
  return (
    <>
    <div className="block absolute z-50 w-20 h-20 ml-10">
        <Image
            width="100%"
            height="100%"
            className="w-full h-full"
            src="/logodark.png"
        />
    </div>
    <section className="relative bg-[url(https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?cs=srgb&dl=pexels-picography-4458.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-light/70 sm:bg-light/0 sm:bg-gradient-to-r sm:from-light/90 sm:to-black/0"></div>
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-4xl sm:text-left">
            <h1 className="text-3xl font-bold sm:text-5xl">
                Relavent Information 
                <strong className="block font-extrabold text-lightb">
                    My Blogs
                </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                This Projects Are Very Important Aspect Of My Learning Journey And Help Me To Improve My Skill<br/>"<em>The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge</em>"<br/><span className='font-semibold'>~ Daniel J. Boorstin ~</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a href="/" className="block w-full rounded-2xl bg-lightb/90 px-12 py-3 font-semibold text-light hover:bg-lightb shadow focus:outline-none focus:ring active:bg-lightb sm:w-auto">
                Home
                </a>
                <a href="/contact" className="block w-full rounded-2xl bg-light/90 hover:bg-light px-12 py-3 font-semibold text-lightb shadow focus:outline-none focus:ring active:text-lightb sm:w-auto">
                Contact
                </a>
            </div>
            </div>
        </div>
    </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 mx-auto">
        <Bcard/>
        </div>
    </>
  )
}

export default blogs