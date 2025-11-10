import React from 'react'
import Hero from '../components/Hero'
import Nav from '../components/Navbar/Nav'
import Service from '../components/service/Service'
import EducationExperience from '../components/Education&Experience/EducationExperience'
import Skill from '../components/skills/Skill'
import Projects from '../components/project/Projects'
import Contact from '../components/contact/Contact'
import GetInTouch from '../components/getInTouch/GetInTouch'
import Footer from '../components/footer/Footer'



const Home = () => {
  return (
    <div>
      <Nav/>
     <Hero/>
     <Service/>
     <EducationExperience/>
     {/* <Skill/> */}
     <Projects/>
     <Contact/>
     <GetInTouch/>
     <Footer/>
    </div>
  )
}

export default Home
