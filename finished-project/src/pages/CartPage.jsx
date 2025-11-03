import { Table, Button, InputNumber, Empty, Card } from 'antd';
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const columns = [
    {
      title: 'Produk',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="flex items-center gap-4">
          <img
            src={record.imageUrl || 'https://via.placeholder.com/80x80'}
            alt={text}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <p className="font-semibold">{text}</p>
            <p className="text-sm text-gray-500">{record.category}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Harga',
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <span className="font-semibold">
          Rp {price?.toLocaleString('id-ID')}
        </span>
      ),
    },
    {
      title: 'Jumlah',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <InputNumber
          min={1}
          max={record.stock}
          value={quantity}
          onChange={(value) => updateQuantity(record._id, value)}
        />
      ),
    },
    {
      title: 'Subtotal',
      key: 'subtotal',
      render: (_, record) => (
        <span className="font-bold text-blue-600">
          Rp {(record.price * record.quantity).toLocaleString('id-ID')}
        </span>
      ),
    },
    {
      title: 'Aksi',
      key: 'action',
      render: (_, record) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(record._id)}
        >
          Hapus
        </Button>
      ),
    },
  ];

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <Empty
            description="Keranjang belanja kosong"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          >
            <Button
              type="primary"
              icon={<ShoppingOutlined />}
              onClick={() => navigate('/products')}
            >
              Mulai Belanja
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Keranjang Belanja</h1>

      <Card>
        <Table
          columns={columns}
          dataSource={cart}
          rowKey="_id"
          pagination={false}
          footer={() => (
            <div className="flex justify-between items-center pt-4">
              <Button onClick={clearCart} danger>
                Kosongkan Keranjang
              </Button>
              
              <div className="text-right">
                <p className="text-lg text-gray-600 mb-2">
                  Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)} unit
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  Total: Rp {cartTotal.toLocaleString('id-ID')}
                </p>
                <Button
                  type="primary"
                  size="large"
                  className="mt-4"
                  onClick={() => alert('Checkout feature coming in Modul 3!')}
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        />
      </Card>
    </div>
  );
}

export default CartPage;

