import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Skill from '../components/skill/Skill'
import { sanityClient } from '../sanity'
import { getAboutContentQuery, getFooter, getHomeContentQuery, getProgress, getSkillContentQuery, getTimeline } from '../utils/queries'
import Progress from '../components/progress/Progress'
import { Footer } from '../components/Foot'
import Contact from '../components/Contact'
import { NextSeo } from 'next-seo'

export default function Homepage({skills,abouts,homehero,timeline,foot}) {
  return (
    <>
    <NextSeo 
      title="Mustafa Azad Portfolio"
      description="This is my portfolio and I am a Full-Stack Web Developer & Technology Enthausiast."
      canonical="https://www.mustafaazad.me/"
      openGraph={{
        siteName : "mustafaazad",
        url : "https://www.mustafaazad.me/",
        releaseDate: '2022-11-10T22:04:11Z',
        tags: ['mustafaazad', 'mustafa', 'azad', 'nextjs', 'collage', 'ietdavv','indore', 'madhyapardesh', 'india', 'sanity', 'sanityio','skill','portfolio', 'website','dev', 'developer','amazing','wow','tailwind','css','react','javascript', 'experience', 'working'],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://www.mustafaazad.me/favicon.ico',
        },
      ]}
      />
    <div className='overflow-hidden select-none'>
      <Navbar/>
      <Drawer/>
      <LandingPage contenthome = {homehero}/>
      <About contentabout = {abouts}/>
      <Skill contentcard = {skills} timelinecontent = {timeline}/>
      <Progress/>
      <Contact/>
      <Footer data = {foot}/>
      <audio className='invisible' src='/music.mp3' autoPlay></audio>
    </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const skills = await sanityClient.fetch(getSkillContentQuery)
  const abouts = await sanityClient.fetch(getAboutContentQuery)
  const homehero = await sanityClient.fetch(getHomeContentQuery)
  const timeline = await sanityClient.fetch(getTimeline)
  const foot = await sanityClient.fetch(getFooter)
    return {
      props : {
        skills,
        abouts,
        homehero,
        timeline,
        foot
      }
    }
}