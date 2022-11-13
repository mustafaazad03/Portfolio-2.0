import React from 'react'
import Contact from '../components/Contact'
import Drawer from '../components/Drawer'
import { Footer } from '../components/Foot'
import Navbar from '../components/Navbar'
import { sanityClient } from '../sanity'
import { getFooter } from '../utils/queries'

const contact = ({foot}) => {
  return (
    <>
        <div className="overflow-hidden select-none fontd">
        <Navbar/>
        <Drawer/>
        <Contact/>
        <Footer data={foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
        </div>
    </>
  )
}

export default contact

export const getServerSideProps = async () => {
  const foot = await sanityClient.fetch(getFooter)
  return {
      props : {
          foot
      }
  }
  }