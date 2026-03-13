import React from 'react'

function Note({ title, description, category, date, isDone, onDone, onDelete }) {
  return (
    <div className="border border-gray-800 p-4 mb-4 bg-white">
      <h3 className="text-lg font-mono text-gray-900 mb-2">{title}</h3>
      <p className="font-mono text-gray-900 mb-3">{description}</p>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono border border-gray-800 px-2 py-1">
            {category}
          </span>
          {isDone && (
            <span className="text-sm font-mono border border-gray-800 px-2 py-1">
              done
            </span>
          )}
        </div>
        <span className="text-sm font-mono text-gray-900">
          {date
            ? new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })
            : ''}
        </span>
      </div>
      {(onDone || onDelete) && (
        <div className="mt-3 flex gap-2">
          {onDone && !isDone && (
            <button
              type="button"
              onClick={onDone}
              className="px-3 py-1 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono text-sm"
            >
              Mark Done
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="px-3 py-1 border border-gray-800 bg-white hover:bg-gray-100 text-gray-900 font-mono text-sm"
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Note