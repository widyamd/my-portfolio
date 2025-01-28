import './App.css'
import './style.css'
import Navbar from './components/layouts/Navbar'
import Profile from './components/layouts/Profile'
import Skills from './components/layouts/Skills'
import WorkExperience from './components/layouts/WorkExperience'
import LatestProjects from './components/layouts/LatestProjects'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Profile/>
      <Skills/>
      <WorkExperience/>
      <LatestProjects/>
      <Footer/>
    </>
  )
}

export default App
