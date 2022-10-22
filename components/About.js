import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden dark:bg-darko/10 w-[100vw] mb-16">
        <div className="bg-black lg:clip content-center h-[60vh] max-w-max lg:w-[100%]">
        <svg className='m-auto my-4 lg:w-[50vw] lg:clip lg:h-[55vh] w-[100vw] h-[50vh] relative lg:mb-[-34rem]' viewBox="0 0 529 764" fill="none">
        <path d="M254 464L427.205 764H80.7949L254 464Z" fill="#F1F3CE"/>
        <path d="M277 0L406.904 225H147.096L277 0Z" fill="#F1F3CE"/>
        <path d="M175.889 576.113L45.9847 351.113L305.792 351.113L175.889 576.113Z" fill="#F1F3CE"/>
        <path d="M184 308L140.699 233H227.301L184 308Z" fill="#F1F3CE"/>
        <path d="M393 684L263.096 459L522.904 459L393 684Z" fill="#F1F3CE"/>
        <path d="M378.349 443.994L257.105 233.994L499.593 233.994L378.349 443.994Z" fill="#F1F3CE"/>
        <path d="M86.6027 442.602L173.205 592.602H0.000151789L86.6027 442.602Z" fill="#F1F3CE"/>
        <path d="M464 580L528.952 692.5H399.048L464 580Z" fill="#F1F3CE"/>
        <path d="M316 358L367.962 448H264.038L316 358Z" fill="#F1F3CE"/>
        <path d="M242 229L306.952 341.5H177.048L242 229Z" fill="#F1F3CE"/>
        <path d="M76 602.301L162.603 602.301L119.301 677.301L76 602.301Z" fill="#F1F3CE"/>
        <path d="M90 165L176.603 315H3.39746L90 165Z" fill="#F1F3CE"/>
        <path d="M402.75 702.127L467.702 702.127L435.226 758.377L402.75 702.127Z" fill="#F1F3CE"/>
        <path d="M102.75 165.476L167.702 165.476L135.226 221.726L102.75 165.476Z" fill="#F1F3CE"/>
        </svg>
        {/* image of coder */}
        <div className="lg:ml-[26%] xl:ml-[34%] 2xl:ml-[37%] mx-[29%] sm:mx-[40%] mt-[-16rem] lg:mb-[-15rem]  mb-[-19rem] w-[12rem] h-[50vh] lg:mt-[41%] xl:mt-[18vw] xl:mb-[-11vw] 2xl:mt-0 lg:w-[31vw] xl:w-[24vw] 2xl:w-[60vw] 2xl:h-[30vh] lg:h-[20vh]">
        <Image src="/codeing.jpeg" height={500} width={400} className="relative mix-blend-multiply"/>
        </div>
        <h3 className='absolute rotate-90 left-0 ml-[-1.5rem] mt-[8rem] md:mt-[-1rem] lg:mt-32 xl:mt-16 font-medium sm:text-base text-sm text-darko dark:text-lightb 2xl:text-2xl'>Designer <span className='font-bold'>'s</span></h3>
        </div>
        {/* about us content */}
        <div className="text-black dark:text-black 2xl:space-y-3 lg:my-auto">
          <h3 className='text-3xl mt-2 font-bold text-center 2xl:text-7xl'>About <span className='dark:text-lightb text-darko'>Me</span></h3>
          <h4 className='font-semibold text-center 2xl:text-3xl'>Hi! I'm Mustafa Azad</h4>
          <p className='mx-auto text-center text-sm w-[91vw] 2xl:w-[30vw] 2xl:text-2xl lg:w-[40vw] my-2'>Currently Pursuing B.Tech From Institute Of Engineering and Technology Davv, Indore. Having Hands On Experence On<span className='font-semibold text-darko dark:text-lightb'> React Js With Bootstrap </span>, <span className='font-semibold text-darko dark:text-lightb'>Next Js With Tailwind</span>,<span className='font-semibold text-darko dark:text-lightb'> Html Css Javascript (Vanilla) Node Js </span>,Leaning . . . . 
          My Hobbies Are Reading And Football.</p>
          <div className="flex justify-center space-x-4 2xl:text-3xl mt-2 mb-4">
            <span>Checkout On - </span>
            <Link href="www.github.com"><svg viewBox="0 0 496 512" className='fill-black hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 w-6 h-6 cursor-pointer sm:ml-2'>
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
            </Link>
            <Link href="www.linkedin.com"><svg viewBox="0 0 448 512" className='fill-black hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 w-6 h-6 cursor-pointer'>
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
            </Link>
            <Link href="www.instagram.com"><svg viewBox="0 0 448 512" className='fill-black hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 w-6 h-6 cursor-pointer'>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
            </Link>
          </div>
          <h3 className='-rotate-90 absolute right-0 mr-[-1rem] font-semibold'>Working</h3>
        </div>
    </div>
    </>
  )
}

export default About