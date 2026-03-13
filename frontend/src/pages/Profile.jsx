import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-white">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-mono mb-6 text-gray-900">Profile</h1>
        
        <div className="w-full p-6 border border-gray-800">
          <p className="text-lg font-mono text-gray-900 mb-4">
            Welcome to your profile page
          </p>
          
          <div className="mt-4">
            <Link 
              to="/home" 
              className="inline-block px-4 py-2 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile