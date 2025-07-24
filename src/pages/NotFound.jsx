import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-blue-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.709A7.962 7.962 0 016 15m0 0a7.963 7.963 0 01-.217-1.709A7.962 7.962 0 0112 9c2.34 0 4.29 1.007 5.824 2.709A7.962 7.962 0 0118 15"
            />
          </svg>
        </div>
        
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Siden blev ikke fundet
        </h2>
        <p className="text-gray-600 mb-8">
          Beklager, den side du leder efter eksisterer ikke eller er blevet flyttet.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Gå til forsiden
          </Link>
          <Link
            to="/produkter"
            className="block bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se produkter
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
