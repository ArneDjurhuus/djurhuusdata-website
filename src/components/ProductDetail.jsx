/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

const ProductDetail = ({ product }) => {
  const { addToCart, isInCart, getCartItem } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produktet blev ikke fundet</h1>
          <Link 
            to="/produkter" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Tilbage til produkter
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                  Hjem
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link to="/produkter" className="ml-4 text-gray-500 hover:text-gray-700">
                  Produkter
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-4 text-gray-900 font-medium">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Image */}
            <div className="lg:sticky lg:top-8">
              <div className={`rounded-lg overflow-hidden shadow-lg ${
                product.type === 'physical' 
                  ? 'bg-gradient-to-br from-green-100 to-green-200' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-200'
              }`}>
                {product.name === "DD-PrivacyPEN" ? (
                  <img 
                    src="/tailsOS-usb.jpg" 
                    alt={`${product.name} produkt billede`}
                    className="w-full h-96 object-cover"
                  />
                ) : (
                  <div className={`h-96 flex items-center justify-center ${
                    product.type === 'physical' ? 'text-green-700' : 'text-blue-700'
                  }`}>
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        {product.type === 'physical' ? (
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                        )}
                      </svg>
                      <p className="text-lg font-medium">{product.name}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              
              {/* Header */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  product.type === 'physical' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {product.category}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl lg:text-2xl font-bold text-green-600 mb-6">
                  {product.price}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Beskrivelse</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Hvad er inkluderet?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Teknologier & Tools</h2>
                <div className="flex flex-wrap gap-3">
                  {product.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        product.type === 'physical'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">Leveringstid</h3>
                </div>
                <p className="text-gray-700">{product.deliveryTime}</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => addToCart(product)}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isInCart(product.id)
                      ? 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500'
                      : product.type === 'physical'
                      ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
                      : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
                  }`}
                >
                  {isInCart(product.id) 
                    ? `I kurv (${getCartItem(product.id)?.quantity || 0})` 
                    : 'Tilføj til kurv'
                  }
                </button>
                <Link
                  to="/kontakt"
                  className={`w-full block text-center font-bold py-4 px-8 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    product.type === 'physical'
                      ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
                  }`}
                >
                  Få tilbud på {product.name}
                </Link>
                <a
                  href="tel:+4521360035"
                  className="w-full block text-center font-medium py-3 px-8 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Ring direkte: +45 21 36 00 35
                </a>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Spørgsmål?</h3>
                <p className="text-gray-700 mb-4">
                  Har du brug for en tilpasset løsning eller har andre spørgsmål? 
                  Jeg hjælper gerne med at finde den perfekte løsning til dine behov.
                </p>
                <Link 
                  to="/kontakt" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Kontakt mig for en uforpligtende snak →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
