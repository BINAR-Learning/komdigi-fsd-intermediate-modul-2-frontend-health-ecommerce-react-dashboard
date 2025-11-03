import { Card, Button, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const { Meta } = Card;

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <Card
      hoverable
      onClick={handleCardClick}
      cover={
        <img
          alt={product.name}
          src={product.imageUrl || 'https://via.placeholder.com/300x200?text=Health+Product'}
          className="h-48 object-cover"
        />
      }
      actions={[
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
          key="add-to-cart"
        >
          Tambah ke Keranjang
        </Button>,
      ]}
    >
      <Meta
        title={
          <div className="flex justify-between items-start">
            <span className="text-lg font-semibold">{product.name}</span>
            <Tag color="blue">{product.category}</Tag>
          </div>
        }
        description={
          <div>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-blue-600">
              Rp {product.price?.toLocaleString('id-ID')}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Stock: {product.stock || 0} unit
            </p>
          </div>
        }
      />
    </Card>
  );
}

export default ProductCard;

