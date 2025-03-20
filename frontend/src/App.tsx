import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/testimonials'
import Guide from './pages/Guide'
import Pricing from './pages/Pricing'

function App() {

  return (

    <div className=' w-full text-center '>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Testimonials" element={<Testimonials/>} />
      <Route path="/guide" element={<Guide/>} />
      <Route path="/pricing" element={<Pricing/>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
