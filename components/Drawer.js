// import react from "react"
// import Image from "next/image";
import Link from "next/link";
// import Navbar from "./Navbar";
import { useState } from "react";

function Drawer() {

const linkdrwr = [
    {
    name : "Home",link : "#",imgl : "/houselight.png",imfd : "/housedark.png"
    },
    {
    name : "About",link : "#",imgl : "/aboutlight.png",imfd : "/aboutdark.png"
    },
    {
    name : "Achivement",link : "#",imgl : "/achivementlight.png",imfd : "/achivementdark.png"
    },
    {
    name : "Projects",link : "#",imgl : "/projectlight.png",imfd : "/projectdark.png"
    },
    {
    name : "Blogs",link : "#",imgl : "/blogslight.png",imfd : "/blogsdark.png"
    },
]

return(
    <div id="drawer-navigation" class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <button type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5 mr-8 sm:mr-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
    <div className="py-4 overflow-y-auto">
        <ul className="space-y-2">
            {linkdrwr.map((value,idx) => {
            return(
            <li key={idx}>
                <a href={value.link} className="flex items-center text-black focus-within:text-lightb dark:focus-within:text-darko font-semibold p-2 text-base dark:text-light focus-within:border-lightb focus-within:border-b-4 dark:focus-within:border-darko">
                <img src={"dark"?value.imfd:value.imgl} className='w-4 h-4' alt={value.name}/>
                <span className="ml-3">{value.name}</span>
                </a>
            </li>
            )
            })}
        </ul>
        <div className='font-bold w-[93%] sw:w-[100%] text-center lg:block bg-lightb dark:bg-darko text-light dark:text-black cursor-pointer rounded-full p-2 focus-within:border-[3px] focus-within:border-lightb dark:focus-within:border-darko my-[1.35rem] transition ease-in-out delay-200'><Link href='#'>Contact Me</Link></div>
    </div>
</div>
)
}
export default Drawer;