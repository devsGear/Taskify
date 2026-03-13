import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../apiCalls/authCalls'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')
    
    try {
      const userData = {
        ...formData,
        createdAt: new Date()
      }
      const response = await register(userData)
      setSuccess('Registration successful! Please login.')
      setFormData({ name: '', email: '', password: '' })
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 border border-gray-800">
        <h1 className="text-3xl font-mono text-center mb-6 text-gray-900">Sign Up</h1>
        
        {error && (
          <div className="mb-4 p-2 border border-gray-800 text-gray-900 font-mono">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-2 border border-gray-800 text-gray-900 font-mono">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-900 font-mono mb-1">Name:</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-900 font-mono mb-1">Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block text-gray-900 font-mono mb-1">Password:</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono focus:outline-none"
          >
            {isLoading ? 'Processing...' : 'Sign Up'}
          </button>
          
          <div className="text-center font-mono text-gray-900 mt-4">
            Already have an account? <Link to="/login" className="underline">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register