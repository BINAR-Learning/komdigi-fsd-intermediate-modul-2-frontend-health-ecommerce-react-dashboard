import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
import {
  ShoppingCartOutlined,
  HomeOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              Health Shop
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 transition ${
                isActive("/")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <HomeOutlined />
              <span>Home</span>
            </Link>

            <Link
              to="/products"
              className={`flex items-center space-x-1 transition ${
                isActive("/products")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <AppstoreOutlined />
              <span>Products</span>
            </Link>

            <Link
              to="/cart"
              className={`flex items-center space-x-1 transition ${
                isActive("/cart")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <Badge count={cartCount} offset={[5, 0]} showZero>
                <ShoppingCartOutlined className="text-xl" />
              </Badge>
              <span className="ml-2">Cart</span>
            </Link>

            <Link
              to="/login"
              className={`flex items-center space-x-1 transition ${
                isActive("/login")
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <LoginOutlined />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
