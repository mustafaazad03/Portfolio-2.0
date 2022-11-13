import React from 'react'
import About from '../components/About'
import { sanityClient } from '../sanity'
import { getAboutContentQuery, getFooter} from '../utils/queries'
import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
import { Footer } from '../components/Foot'
import { NextSeo } from 'next-seo'
const about = ({abouts,foot}) => {
  return (
    <>
      <NextSeo 
      title="About Section Of Mustafa"
      description="This is my portfolio About Section and I am a Full-Stack Web Developer & Technology Enthausiast."
      canonical="https://www.mustafaazad.me/about"
      openGraph={{
        siteName : "mustafaazadabout",
        url : "https://www.mustafaazad.me/about",
        releaseDate: '2022-11-02T22:04:11Z',
        tags: ['mustafaazad', 'mustafa', 'azad','about' , 'section' , 'nextjs', 'collage', 'ietdavv','indore', 'madhyapardesh', 'india', 'sanity', 'sanityio','skill','portfolio', 'website','dev', 'developer','amazing','wow','tailwind','css','react','javascript', 'experience', 'working'],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://www.mustafaazad.me/favicon.ico',
        },
      ]}
      />
      <div className="overflow-hidden select-none fontd">
        <Navbar/>
        <Drawer/>
        <About contentabout = {abouts}/>
        <Footer data={foot}/>
        <audio className='invisible' src='/music.mp3' autoPlay></audio>
        </div>
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
