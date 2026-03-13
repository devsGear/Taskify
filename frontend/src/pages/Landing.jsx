import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-mono text-gray-900">Taskify</h1>
          <div className="space-x-4">
            <Link to="/login" className="font-mono text-gray-900 underline">Login</Link>
            <Link to="/register" className="font-mono px-4 py-1 border border-gray-800 text-gray-900 hover:bg-gray-100">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-mono text-gray-900 mb-6">Organize Your Tasks</h2>
            <p className="text-xl font-mono text-gray-900 mb-8">
              A simple, no-frills task management application designed for efficiency.
            </p>
            <div className="inline-block border border-gray-800 p-1">
              <Link 
                to="/register" 
                className="font-mono px-8 py-3 block bg-white hover:bg-gray-100 text-gray-900"
              >
                Get Started - It's Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-center text-gray-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl font-mono text-gray-900 mb-4">Task Organization</h3>
              <p className="font-mono text-gray-900">
                Create, categorize, and manage tasks with a clean, distraction-free interface.
              </p>
            </div>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl font-mono text-gray-900 mb-4">Simple Categories</h3>
              <p className="font-mono text-gray-900">
                Group your tasks by categories to keep everything organized and accessible.
              </p>
            </div>
            <div className="border border-gray-800 p-6">
              <h3 className="text-xl font-mono text-gray-900 mb-4">Task History</h3>
              <p className="font-mono text-gray-900">
                Keep track of all your completed tasks with timestamps and detailed descriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-center text-gray-900 mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-10 pb-10 border-b border-gray-800">
              <div className="w-full md:w-1/4 text-center md:text-right pr-8 pb-4 md:pb-0">
                <div className="border border-gray-800 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="font-mono text-gray-900 text-lg">1</span>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-mono text-gray-900 mb-2">Create an Account</h3>
                <p className="font-mono text-gray-900">
                  Sign up with your email and set a password. No unnecessary information required.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-10 pb-10 border-b border-gray-800">
              <div className="w-full md:w-1/4 text-center md:text-right pr-8 pb-4 md:pb-0">
                <div className="border border-gray-800 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="font-mono text-gray-900 text-lg">2</span>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-mono text-gray-900 mb-2">Add Your Tasks</h3>
                <p className="font-mono text-gray-900">
                  Create tasks with titles, descriptions, and categories to organize your workflow.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/4 text-center md:text-right pr-8 pb-4 md:pb-0">
                <div className="border border-gray-800 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="font-mono text-gray-900 text-lg">3</span>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-mono text-gray-900 mb-2">Stay Organized</h3>
                <p className="font-mono text-gray-900">
                  Complete tasks, track progress, and manage everything from your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-mono text-gray-900 mb-6">Ready to Get Started?</h2>
          <div className="inline-block border border-gray-800 p-1">
            <Link 
              to="/register" 
              className="font-mono px-8 py-3 block bg-white hover:bg-gray-100 text-gray-900"
            >
              Create Free Account
            </Link>
          </div>
          <p className="mt-4 font-mono text-gray-900">
            Already have an account? <Link to="/login" className="underline">Login here</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center font-mono text-gray-900">
            Taskify © 2025 - A simple task management solution
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Landing