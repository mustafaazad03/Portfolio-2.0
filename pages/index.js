import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
// import Buisness from '../components/Buisness'
import LandingPage from '../components/LandingPage'
import About from '../components/About'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      {/* <Layout/> */}
      <Drawer />
      <LandingPage/>
      <About/>
      {/* <Buisness/> */}
    </div>
  )
}
