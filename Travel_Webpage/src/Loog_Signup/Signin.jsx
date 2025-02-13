import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const go = () => {
    navigate('/')
  }
  return (
    <div style={{backgroundcolor: "rgba(224, 224, 224, 0.856)"}} className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none" placeholder="Enter your name" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none" placeholder="Enter your password" />
          </div>
          <button  onClick={go} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="text-blue-500 underline" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Signin
