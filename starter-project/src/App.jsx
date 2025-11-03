import { Routes, Route } from 'react-router-dom'

// TODO: Import all pages
// import HomePage from './pages/HomePage'
// import ProductsPage from './pages/ProductsPage'
// import ProductDetailPage from './pages/ProductDetailPage'
// import CartPage from './pages/CartPage'
// import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Add Navbar component */}
      
      {/* TODO: Setup routes dengan React Router */}
      {/* Hint: 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      */}
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Health E-Commerce Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          ⚠️ Setup routing di atas untuk navigate antar pages!
        </p>
      </div>
    </div>
  )
}

export default App

