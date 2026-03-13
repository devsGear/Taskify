import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Note from '../components/Note'
import { getTasks } from '../apiCalls/taskCalls'

function Home() {
  const [tasks, setTasks] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
    
    if (token) {
      fetchTasks()
    } else {
      setIsLoading(false)
    }
  }, [])
  
  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks()
      setTasks(tasksData)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setIsLoading(false)
    }
  }
  
  const sampleTasks = [
    {
      _id: '1',
      title: 'Complete Project Proposal',
      description: 'Finish the draft proposal for the new client project',
      category: 'Work',
      createdAt: new Date()
    },
    {
      _id: '2',
      title: 'Buy Groceries',
      description: 'Milk, eggs, bread, and vegetables',
      category: 'Personal',
      createdAt: new Date(Date.now() - 86400000) // Yesterday
    },
    {
      _id: '3',
      title: 'Exercise',
      description: '30 minutes of cardio and strength training',
      category: 'Health',
      createdAt: new Date(Date.now() - 172800000) // 2 days ago
    }
  ]
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-4xl font-mono mb-8 text-gray-900">Taskify</h1>
        
        <div className="w-full max-w-md p-6 border border-gray-800 mb-8">
          <p className="text-lg font-mono text-gray-900 mb-8 text-center">
            Welcome to Taskify - Your simple task management solution
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/login" 
              className="block w-full p-2 text-center border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
            >
              Login
            </Link>
            
            <Link 
              to="/register" 
              className="block w-full p-2 text-center border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
            >
              Sign Up
            </Link>
          </div>
        </div>
        
        {/* Preview of tasks */}
        <div className="w-full max-w-md border border-gray-800 p-6">
          <h2 className="text-2xl font-mono mb-6 text-gray-900 text-center">Task Examples</h2>
          {sampleTasks.map(task => (
            <Note 
              key={task._id}
              title={task.title}
              description={task.description}
              category={task.category}
              date={task.createdAt}
            />
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8">
      <h1 className="text-4xl font-mono mb-8 text-gray-900">Your Tasks</h1>
      
      <div className="w-full max-w-2xl">
        {isLoading ? (
          <div className="text-center font-mono text-gray-900">Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center font-mono text-gray-900">No tasks found. Create your first task!</div>
        ) : (
          tasks.map(task => (
            <Note 
              key={task._id}
              title={task.title}
              description={task.description}
              category={task.category}
              date={task.createdAt}
            />
          ))
        )}
        
        <div className="mt-8 flex justify-center">
          <Link 
            to="/profile" 
            className="inline-block px-6 py-2 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home