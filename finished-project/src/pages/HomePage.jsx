import { Button, Card, Row, Col } from 'antd';
import { ShoppingOutlined, RocketOutlined, SafetyOutlined, DollarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Produk Berkualitas',
      description: 'Vitamin dan suplemen kesehatan berkualitas tinggi dari PT Aiman'
    },
    {
      icon: <RocketOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Pengiriman Cepat',
      description: 'Pengiriman cepat ke seluruh Indonesia dalam 1-3 hari kerja'
    },
    {
      icon: <DollarOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
      title: 'Harga Terjangkau',
      description: 'Harga kompetitif dengan berbagai promo menarik'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Selamat Datang di Health E-Commerce
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Platform terpercaya untuk produk kesehatan berkualitas
          </p>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/products')}
            icon={<ShoppingOutlined />}
            className="h-12 px-8 text-lg"
          >
            Mulai Belanja
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kenapa Memilih Kami?
        </h2>
        
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="text-center h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <SafetyOutlined style={{ fontSize: '64px', color: '#1890ff' }} className="mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Produk Kesehatan Terpercaya
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Semua produk telah tersertifikasi dan aman untuk dikonsumsi
          </p>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/products')}
            className="h-12 px-8"
          >
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

