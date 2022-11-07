import React from 'react'
import Acard from '../components/achive/Acard'
import Certify from '../components/achive/Certify'
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer';
import { Footer } from '../components/Foot'
import { sanityClient } from '../sanity'
import { getAcard, getCertify, getFooter } from '../utils/queries';
const achivement = ({foot,acard,cerify}) => {
  return (
    <div className='dark:bg-black'>
        <Navbar/>
        <Drawer/>
        <Acard cdata = {acard}/>
        <Certify certifi = {cerify}/>
        <Footer data = {foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
    </div>
  )
}

export default achivement

export const getServerSideProps = async () => {
  const foot = await sanityClient.fetch(getFooter)
  const acard = await sanityClient.fetch(getAcard)
  const cerify = await sanityClient.fetch(getCertify)
  return {
      props : {
          foot,
          acard,
          cerify
      }
  }
  }