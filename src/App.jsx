import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-mig" element={<About />} />
          <Route path="/produkter" element={<Products />} />
          <Route path="/produkt/:slug" element={<ProductPage />} />
          <Route path="/kurv" element={<CartPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
