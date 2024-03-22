import Interests from './components/Interests'
import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="business-card-container">
      <Info/>
      <div className='about-and-interests'>
        <About/>
        <Interests/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
