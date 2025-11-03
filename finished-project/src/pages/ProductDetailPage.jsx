import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, Button, Spin, Alert, Tag, Descriptions } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useCart } from '../context/CartContext';
import { getProductById } from '../services/api';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Fetch product detail
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id).then((res) => res.data),
  });

  const product = data?.data;

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
        <Spin size="large" tip="Loading product details..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert
          message="Product Not Found"
          description={error.response?.data?.message || 'Failed to load product details'}
          type="error"
          showIcon
        />
        <Button onClick={() => navigate('/products')} className="mt-4">
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/products')}
        className="mb-4"
      >
        Kembali ke Products
      </Button>

      <Card>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.imageUrl || 'https://via.placeholder.com/500x400?text=Health+Product'}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Tag color="blue" className="mb-2">{product.category}</Tag>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
            </div>

            <p className="text-4xl font-bold text-blue-600 mb-6">
              Rp {product.price?.toLocaleString('id-ID')}
            </p>

            <Descriptions bordered column={1} className="mb-6">
              <Descriptions.Item label="Kategori">
                {product.category}
              </Descriptions.Item>
              <Descriptions.Item label="Manufacturer">
                {product.manufacturer}
              </Descriptions.Item>
              <Descriptions.Item label="Stock">
                <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                  {product.stock > 0 ? `${product.stock} unit tersedia` : 'Out of Stock'}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={product.isActive ? 'green' : 'red'}>
                  {product.isActive ? 'Active' : 'Inactive'}
                </Tag>
              </Descriptions.Item>
            </Descriptions>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Deskripsi</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              block
              className="h-12"
            >
              {product.stock > 0 ? 'Tambah ke Keranjang' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetailPage;

