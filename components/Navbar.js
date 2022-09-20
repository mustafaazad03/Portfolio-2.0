import React from 'react';
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3">
        {/* Logo Image */}
        <div className="">
            <Image src="" className='' height={100} width={150} alt='Logo'/>
        </div>
        {/* links In Navbar */}
        <div className="">
            
        </div>
        {/* Contact Button and Dark/Light Mode Toggle */}
        <div className=""></div>
      </div>
    </>
  )
}

export default Navbar
