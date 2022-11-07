import React,{useState} from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


const Navbar = () => {
  const [dark, setDark] = useState("false");
  const route = useRouter();
  const DarkMode = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(false);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(true);
    }
  };
  const navlink = [
    {lname : "Home",link : "/"},
    {lname : "About",link : "/about"},
    {lname : "Achivement",link : "/achivement"},
    {lname : "Projects",link : "/project"},
    {lname : "Blogs",link : "/blogs"},
  ]
  
  return (
    <nav className='dark:bg-black bg-[#fff]'>
      <div className="flex justify-evenly space-x-[40%] md:space-x-[60%] lg:space-x-32 xl:space-x-64">
        {/* Logo Image */}
        <motion.div animate={{opacity : [0,1], x : [-50,0]}} transition={{duration : 0.8, bounce : 1, delay : 0.1}} className="my-[0.1rem]">
            <Link href="/"><Image src={dark?"/logodark.png":"/logolight.png"} className="cursor-pointer" height={80} width={80} alt='Logo'/></Link>
        </motion.div>
        {/* links In Navbar */}
        <motion.ul animate={{opacity : [0,1], x : [-200,0]}} transition={{duration : 1, bounce : 1, delay : 0.2}} className='lg:flex hidden space-x-6 font-semibold my-7'>
        {navlink.map((value,idx) => {
          return(
            <li className='dark:text-light hover:dark:text-darko hover:border-b-[3px] hover:text-lightb focus-within:border-lightb  dark:hover:border-darko focus-within:border-b-4 dark:focus-within:border-darko' key={idx}><Link href={value.link}><a>{value.lname}</a></Link></li>
          )
        })}
        </motion.ul>
        {/* Contact Button and Dark/Light Mode Toggle */}
        <motion.div animate={{opacity : [0,1], x : [-500,0]}} transition={{duration : 1, bounce : 1, delay : 0.3}} className="flex space-x-5">
          <button className='w-6 h-6 cursor-pointer dark:bg-black rounded-full bg-[#fff] dark:shadow-8xl shadow-9xl my-7' onClick={DarkMode}><div className='mt-[4px]'><Image src={dark?"/moon.svg":"/sun.svg"} width={20.96} height={19.96} alt={dark?"Moon":"Sun"}/></div></button>
          <div className='font-bold hidden lg:block bg-lightb dark:bg-darko hover:text-lightb hover:bg-[#fff] dark:hover:bg-black text-light hover:dark:text-darko dark:text-black cursor-pointer rounded-full p-2 hover:border-[3px] hover:border-lightb dark:hover:border-darko focus-within:border-[3px] focus-within:border-lightb dark:focus-within:border-darko transition ease-in-out my-auto delay-200'><Link href='/contact'>Contact Me</Link></div>
          <button className="block lg:hidden" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
            <svg width="25" height="25" viewBox="0 0 96 82" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 6.82796C0 3.05702 3.05702 0 6.82796 0H88.7635C92.5346 0 95.5915 3.05702 95.5915 6.82796C95.5915 10.5989 92.5346 13.6559 88.7635 13.6559H6.82796C3.05702 13.6559 0 10.5989 0 6.82796Z" fill={dark?"#000":"#F1F3CE"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 40.9678C0 37.1968 3.05702 34.1398 6.82796 34.1398H88.7635C92.5346 34.1398 95.5915 37.1968 95.5915 40.9678C95.5915 44.7389 92.5346 47.7957 88.7635 47.7957H6.82796C3.05702 47.7957 0 44.7389 0 40.9678Z" fill={dark?"#000":"#F1F3CE"}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M40.9678 75.1076C40.9678 71.3365 44.0248 68.2796 47.7957 68.2796H88.7635C92.5346 68.2796 95.5915 71.3365 95.5915 75.1076C95.5915 78.8787 92.5346 81.9356 88.7635 81.9356H47.7957C44.0248 81.9356 40.9678 78.8787 40.9678 75.1076Z" fill={dark?"#000":"#F1F3CE"}/>
            </svg>
          </button>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar