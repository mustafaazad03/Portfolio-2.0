import Navbar from '../components/Navbar'
import Drawer from "../components/Drawer"
// import Buisness from '../components/Buisness'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <Layout/> */}
      <Drawer />
      <LandingPage/>
      {/* <Buisness/> */}
    </>
  )
}
