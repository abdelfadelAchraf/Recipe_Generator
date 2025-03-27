import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CreateAccount from './pages/CreateAccount';
import RecipeGenerator from './pages/RecipeGenerator';
import RecipeDetails from './pages/RecipeDetails';


function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  
  // Effect to handle loading state on route changes
  useEffect(() => {
    setLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <div className="">
      <Navbar />
      
      <main className="flex-grow">
        {loading ? (
          <div className="flex justify-center items-center h-screen w-full">
            <svg className="w-2xs h-w-2xs text-red-300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20c-19.3 0-32.1-40-51.4-40z"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="42.76482137044271 42.76482137044271"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;256.58892822265625"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/createRecipe" element={<RecipeGenerator />} />

            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;