import React from 'react'
import About from '../components/About'
import { sanityClient } from '../sanity'
import { getAboutContentQuery, getFooter} from '../utils/queries'
import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
import { Footer } from '../components/Foot'

const about = ({abouts,foot}) => {
  return (
    <>
        <Navbar/>
        <Drawer/>
        <About contentabout = {abouts}/>
        <Footer data={foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
    </>
  )
}

export default about

export const getServerSideProps = async () => {
    const abouts = await sanityClient.fetch(getAboutContentQuery)
    const foot = await sanityClient.fetch(getFooter)
    return {
        props : {
        abouts,
        foot
        }
    }
}
