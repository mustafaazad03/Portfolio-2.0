import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Skill from '../components/skill/Skill'
import { sanityClient } from '../sanity'
import { getAboutContentQuery, getFooter, getHomeContentQuery, getSkillContentQuery, getTimeline } from '../utils/queries'
import Progress from '../components/progress/Progress'
import { Footer } from '../components/Foot'
import Contact from '../components/Contact'

export default function Homepage({skills,abouts,homehero,timeline,foot}) {
  return (
    <>
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