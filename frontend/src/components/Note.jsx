import React from 'react'

function Note({ title, description, category, date }) {
  return (
    <div className="border border-gray-800 p-4 mb-4 bg-white">
      <h3 className="text-lg font-mono text-gray-900 mb-2">{title}</h3>
      <p className="font-mono text-gray-900 mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono border border-gray-800 px-2 py-1">
          {category}
        </span>
        <span className="text-sm font-mono text-gray-900">
          {new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
      </div>
    </div>
  )
}

export default Note