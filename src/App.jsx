
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Qualification from './components/Qualification/Qualification'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
    <Header></Header>
    <main className='main'>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Qualification></Qualification>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </main>
    </>
  )
}

export default App
