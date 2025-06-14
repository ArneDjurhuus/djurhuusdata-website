import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to Djurhuus Data
        </h1>
        
        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Count is {count}
          </button>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> to get started.
          </p>
          <p className="text-sm">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
