import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
// import Buisness from '../components/Buisness'
import LandingPage from '../components/LandingPage'
import About from '../components/About'
import Skill from '../components/skill/Skill'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Drawer />
      <LandingPage/>
      <About/>
      <Skill/>
    </div>
  )
}
