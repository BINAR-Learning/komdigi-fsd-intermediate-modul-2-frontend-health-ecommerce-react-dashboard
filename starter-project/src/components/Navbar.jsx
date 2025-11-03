// TODO: Import Link dari react-router-dom
// TODO: Import useCart dari context
// TODO: Import Badge dari antd

function Navbar() {
  // TODO: Get cart count dari CartContext

  // TODO: Create navigation links:
  // - Home (/)
  // - Products (/products)
  // - Cart (/cart) with badge showing count
  // - Login (/login)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-600">
            🏥 Health Shop
          </div>
          
          <div className="text-gray-600">
            ⚠️ TODO: Add navigation links dengan React Router Link!
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

