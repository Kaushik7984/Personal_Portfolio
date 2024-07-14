import './app.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='section'>
      <section id='Home'>
        <Navbar />
        <Hero />
        </section>
      <section id='About'>About</section>
      <section id='Project'>Project</section>
      <section id='Services'>Services</section>
      <section id='Contact'>Contact</section>
    </div>
  )
}

export default App
