import React from 'react'
import Acard from '../components/achive/Acard'
import Certify from '../components/achive/Certify'
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer';
import { Footer } from '../components/Foot'
import { sanityClient } from '../sanity'
import { getAcard, getCertify, getFooter } from '../utils/queries';
import { NextSeo } from 'next-seo';
const achivement = ({foot,acard,cerify}) => {
  return (
    <>
    <NextSeo 
      title="Achievement Section Of Mustafa Azad"
      description="This is my portfolio achievement section and I am a Full-Stack Web Developer & Technology Enthausiast."
      canonical="https://www.mustafaazad.me/achivement"
      openGraph={{
        siteName : "mustafaazad",
        url : "https://www.mustafaazad.me/achivement",
        releaseDate: '2022-11-10T22:04:11Z',
        tags: ['mustafaazad', 'mustafa','achieve','achievement' , 'azad', 'cool' , 'nextjs', 'collage', 'ietdavv','indore', 'madhyapardesh', 'india', 'sanity', 'sanityio','skill','portfolio', 'website','dev', 'developer','amazing','wow','tailwind','css','react','javascript', 'experience', 'working'],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://www.mustafaazad.me/favicon.ico',
        },
      ]}
      />
    <div className='dark:bg-black'>
        <Navbar/>
        <Drawer/>
        <Acard cdata = {acard}/>
        <Certify certifi = {cerify}/>
        <Footer data = {foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
    </div>
    </>
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