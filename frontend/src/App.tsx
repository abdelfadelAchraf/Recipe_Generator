import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Home from './pages/Home'

function App() {

  return (
    
      <div className=' w-full text-center '>
        <Navbar/>
       <Home/> 
        <Footer/>
      </div>
  )
}

export default App
