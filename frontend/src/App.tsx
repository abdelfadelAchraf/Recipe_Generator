import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import CreateAccount from './pages/CreateAccount'

function App() {

  return (

    <div className=' w-full text-center '>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/create-account" element={<CreateAccount/>} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
