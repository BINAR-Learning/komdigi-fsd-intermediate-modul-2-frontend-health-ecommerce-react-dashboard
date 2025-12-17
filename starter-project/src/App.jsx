import { Routes, Route } from "react-router-dom";

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Health E-Commerce Dashboard
          </h1>
          <p className="text-gray-600 mb-6">
            Starter Project - Setup routing di atas untuk navigate antar pages!
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              Welcome to Starter Project!
            </h2>
            <p className="text-blue-700 mb-4">
              Ini adalah starter template untuk belajar. Silakan implementasikan App component sesuai dengan TODO comments di file ini.
            </p>
            <div className="bg-white p-4 rounded border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Langkah selanjutnya:</h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-700 text-sm">
                <li>Buka file <code className="bg-blue-100 px-2 py-1 rounded">src/App.jsx</code></li>
                <li>Ikuti TODO comments untuk implementasi</li>
                <li>Lihat <code className="bg-blue-100 px-2 py-1 rounded">../finished-project/src/App.jsx</code> sebagai reference</li>
                <li>Import dan setup Routes dari react-router-dom</li>
                <li>Import semua pages (HomePage, ProductsPage, dll)</li>
                <li>Setup routing untuk semua pages</li>
                <li>Add Navbar component</li>
              </ol>
            </div>
            <p className="text-sm text-blue-600 mt-4">
              Baca README.md untuk instruksi lengkap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
