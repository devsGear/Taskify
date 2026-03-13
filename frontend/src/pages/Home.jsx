import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Note from '../components/Note'
import {
  getTasks,
  createTask,
  getTasksByCategory,
  markTaskDone,
  deleteTask,
} from '../apiCalls/taskCalls'

function Home() {
  const [tasks, setTasks] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  })
  
  useEffect(() => {
    fetchTasks()
  }, [])
  
  const fetchTasks = async () => {
    try {
      const tasksData = await getTasks()
      setTasks(tasksData)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Error fetching tasks:', error)
      setIsAuthenticated(false)
      setError(error.message || 'Unable to load tasks')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCreateTask = async (e) => {
    e.preventDefault()
    setError('')
    setIsSaving(true)

    try {
      await createTask(formData)
      setFormData({ title: '', description: '', category: '' })
      await fetchTasks()
    } catch (error) {
      setError(error.message || 'Unable to create task')
    } finally {
      setIsSaving(false)
    }
  }

  const handleFilter = async (category) => {
    setFilterCategory(category)
    setIsLoading(true)
    setError('')

    try {
      if (category === 'all') {
        const allTasks = await getTasks()
        setTasks(allTasks)
      } else {
        const filteredTasks = await getTasksByCategory(category)
        setTasks(filteredTasks)
      }
    } catch (error) {
      setError(error.message || 'Unable to filter tasks')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkDone = async (taskId) => {
    try {
      await markTaskDone(taskId)
      await handleFilter(filterCategory)
    } catch (error) {
      setError(error.message || 'Unable to update task')
    }
  }

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId)
      await handleFilter(filterCategory)
    } catch (error) {
      setError(error.message || 'Unable to delete task')
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
      <div className="w-full max-w-2xl mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-mono text-gray-900">Your Tasks</h1>
        <Link 
          to="/profile" 
          className="inline-block px-6 py-2 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
        >
          Go to Profile
        </Link>
      </div>
      
      <div className="w-full max-w-2xl border border-gray-800 p-6 mb-6">
        <h2 className="text-2xl font-mono mb-4 text-gray-900">Create Task</h2>
        <form onSubmit={handleCreateTask} className="space-y-3">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="3"
            className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full p-2 border border-gray-800 font-mono bg-white text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSaving}
            className="px-4 py-2 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono"
          >
            {isSaving ? 'Saving...' : 'Add Task'}
          </button>
        </form>
      </div>

      <div className="w-full max-w-2xl mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => handleFilter('all')}
          className="px-3 py-1 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono text-sm"
        >
          All
        </button>
        {['work', 'personal', 'health'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleFilter(cat)}
            className="px-3 py-1 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono text-sm"
          >
            {cat}
          </button>
        ))}
      </div>

      {error && (
        <div className="w-full max-w-2xl mb-4 p-2 border border-gray-800 text-gray-900 font-mono">
          {error}
        </div>
      )}
      
      <div className="w-full max-w-2xl">
        {isLoading ? (
          <div className="text-center font-mono text-gray-900">Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center font-mono text-gray-900">No tasks found. Create your first task!</div>
        ) : (
          tasks.map(task => (
            <Note 
              key={task._id || task.id}
              title={task.title}
              description={task.description || 'No description'}
              category={task.category}
              date={task.createdAt}
              isDone={task.isDone}
              onDone={() => handleMarkDone(task._id || task.id)}
              onDelete={() => handleDelete(task._id || task.id)}
            />
          ))
        )}
        
      </div>
    </div>
  )
}

export default Home