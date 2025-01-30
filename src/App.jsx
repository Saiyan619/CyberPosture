import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import SectionOne from './components/section1/SectionOne'
import SectionTwo from './components/section2/SectionTwo'
import SectionThree from './components/section3/SectionThree'
import SectionFour from './components/section4/SectionFour'
import SectionFive from './components/section5/SectionFive'
import SectionSix from './components/section6/SectionSix'

function App() {

  return (
    <div>
      <Nav />
      <Header />
      <div className='section_main_container'>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </div>
   </div>
  )
}

export default App
