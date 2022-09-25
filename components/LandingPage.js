import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='dark:bg-black sm:h-[95vh] h-full w-full overflow-x-hidden'>

        {/* ui text placing */}

        <h3 className='absolute w-24 h-32 xl:left-[11rem] lg:top-36 sm:left-[7rem] top-28 left-[19vw] sm:top-32  dark:text-light font-sans font-bold sm:text-[3.5rem] text-5xl'>UI<span className='dark:text-darko text-lightb'>.</span></h3>
        

        {/* react js text component */}

        <div className="absolute w-28 xl:left-[12.5rem] lg:top-[28rem] sm:left-[7.4rem] sm:top-96 left-[60vw] top-[30vh]">
        <div className="absolute bg-black dark:bg-light w-3 h-3 "></div>
        <h4 className='absolute text-lightb dark:text-darko ml-5 top-[-1rem] leading-5'>React & Next Js</h4>
        </div>
        <div className="sm:absolute sm:top-[50vh] sm:left-3 h-32 flex space-x-2 mt-[75vh] mb-[-85vh] sm:mb-0 sm:mt-0 ml-[10vw] sm:ml-0 sm:block sm:space-y-3">
        <Link href="www.github.com"><svg viewBox="0 0 496 512" className='dark:fill-light w-6 h-6 cursor-pointer sm:ml-2'>
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
        </Link>
        <Link href="www.linkedin.com"><svg viewBox="0 0 448 512" className='dark:fill-light w-6 h-6 cursor-pointer'>
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
        </Link>
        <Link href="www.instagram.com"><svg viewBox="0 0 448 512" className='dark:fill-light w-6 h-6 cursor-pointer'>
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
        </Link>
        </div>
        <div className="sm:absolute lg:top-[25vh] xl:left-[36vw] sm:left-[28vw] sm:top-[30vh] lg:w-60 lg:h-60 sm:w-52 sm:h-52 w-[50vw] h-[50vw] top-[30vh] mt-[100vh] sm:mt-0 mb-[-60vh] sm:mb-0 mx-auto dark:bg-darko bg-lightb rounded-full hover:scale-125 ease-in-out delay-150"></div>
        <div className="grid grid-cols-3 sm:justify-around justify-between mx-20">

        {/* first section */}

        <div className=" lg:mt-[80vh] ml-[-20vw] sm:ml-[0] sm:mt-[76vh] mt-[82vh] flex flex-col sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4'>20</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Working</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-3rem] sm:mt-[0.45rem] dark:text-light text-xs'>Websites</h4>
        </div>

        {/* second section */}

        <div className=" lg:mt-[80vh] mb-4 sm:ml-[0] sm:mt-[76vh] mt-[82vh] flex flex-col justify-center sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4'>20</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Working</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-3rem] sm:mt-[0.45rem] dark:text-light text-xs'>Websites</h4>
        </div>

        {/* third Section */}

        <div className=" lg:mt-[80vh] ml-[20vw] mb-4 sm:ml-[0] sm:mt-[76vh] mt-[82vh] flex flex-col justify-end sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4'>20</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Working</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-3rem] sm:mt-[0.45rem] dark:text-light text-xs'>Websites</h4>
        </div>

        </div>
        {/* <div className="sm:absolute lg:top-[25vh] xl:left-[36vw] sm:left-[28vw] sm:top-[30vh] lg:w-60 lg:h-60 sm:w-52 sm:h-52 w-[50vw] h-[50vw] top-[30vh] dark:bg-darko bg-lightb rounded-full hover:scale-125 ease-in-out delay-150"></div> */}
        <h3 className='sm:w-[20vw] w-[50vw] h-[2vw] sm:top-[32vh] sm:left-[65vw] top-[45vh] left-[10vw] absolute font-semibold text-[1.2rem] dark:text-light'>Hi! I Am</h3>
        <h3 className='sm:w-[31vw] w-[80vw] h-[2vw] sm:top-[36vh] sm:left-[65vw] top-[50vh] left-[10vw] absolute font-bold text-[2rem] dark:text-light hover:scale-110 ease-in-out delay-100'>Mustafa Azad</h3>
        <h3 className='absolute sm:w-[31vw] w-[80vw] h-[2vw] sm:top-[43.5vh] top-[58vh] left-[10vw] font-semibold text-xl sm:left-[65vw] dark:text-light'>A <span className="this mx-[0.3rem] font-bold text-2xl dark:text-darko text-lightb"></span> Developer</h3>
        <p className='text-sm xl:w-[18.2vw] sm:w-[25vw] w-[80vw] absolute sm:top-[50vh] sm:left-[65vw] top-[65vh] left-[10vw] dark:text-light'>Have Hands-On Experience In Web Development Using React Js, Next Js and Currently Learning . . .
        </p>
        <Link href="www.google.com" download="/aboutlight.png">
            <div className="lg:w-[10vw] lg:h-[5vh] sm:w-[15vw] h-[6vh] w-[37vw] absolute lg:top-[62vh] sm:top-[69vh] sm:left-[65vw] top-[80vh] left-[10vw] cursor-pointer bg-lightb dark:bg-darko rounded-3xl "><h3 className='text-center dark:text-black text-light text-lg font-semibold'>Resume</h3></div>
        </Link>
        <h3 className='absolute sm:bottom-32 mt-[-80vh] right-0 mr-[-1.5rem] -rotate-90 dark:text-light'>Developer <span className='font-bold'>'s</span></h3>
    </div>
  )
}

export default LandingPage