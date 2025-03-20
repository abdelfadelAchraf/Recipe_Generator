import React, { useState } from 'react';




const CreateAccount = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Handle actual form submission logic here
    }, 2000);
  };

  return (
    <div className="flex min-h-screen ">
      {/* Illustration Side */}
      <div className="hidden md:flex md:w-1/2 bg-red-100/5 items-center justify-center p-10">
        <div className="w-full max-w-md">
        <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
            <p className="text-white/20 mt-2">We're happy to see you again!</p>
          </div>
          {/* Custom Anime-style SVG Illustration */}
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full">
            {/* Background elements */}
            <circle cx="200" cy="200" r="150" fill="#ffeeee" />
            <path d="M320,280 Q200,380 80,280 Q80,180 200,120 Q320,180 320,280 Z" fill="#ffdddd" />
            
            {/* Face */}
            <circle cx="200" cy="180" r="80" fill="#fff" />
            
            {/* Eyes */}
            <ellipse cx="170" cy="170" rx="12" ry="16" fill="#333" />
            <ellipse cx="230" cy="170" rx="12" ry="16" fill="#333" />
            
            {/* Eyebrows */}
            <path d="M155,150 Q170,140 185,150" fill="none" stroke="#333" strokeWidth="3" />
            <path d="M215,150 Q230,140 245,150" fill="none" stroke="#333" strokeWidth="3" />
            
            {/* Blush */}
            <circle cx="160" cy="195" r="12" fill="#ffaaaa" opacity="0.6" />
            <circle cx="240" cy="195" r="12" fill="#ffaaaa" opacity="0.6" />
            
            {/* Mouth */}
            <path d="M180,210 Q200,225 220,210" fill="none" stroke="#333" strokeWidth="3" />
            
            {/* Hair */}
            <path d="M120,180 Q130,120 200,120 Q270,120 280,180 Q300,170 300,190 Q300,210 280,200 
                  Q290,250 240,230 Q200,240 160,230 Q110,250 120,200 Q100,210 100,190 Q100,170 120,180" 
                  fill="#ff6666" />
            
            {/* Small highlights */}
            <circle cx="180" cy="165" r="3" fill="#fff" />
            <circle cx="240" cy="165" r="3" fill="#fff" />
          </svg>
          
          
        </div>
      </div>

      {/* Login Form Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 pt-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">{isLogin ? 'Login' : 'Create Account'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
                disabled={loading}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
              disabled={loading}
            />
            <button 
              type="submit" 
              className="w-full bg-red-400 text-white p-3 rounded-lg hover:bg-red-500 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  {/* Custom loading spinner with SVG */}
                  <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isLogin ? 'Logging in...' : 'Signing up...'}
                </>
              ) : (
                isLogin ? 'Login' : 'Sign Up'
              )}
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button 
              onClick={toggleMode} 
              className="text-red-400 ml-1 hover:underline"
              disabled={loading}
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;