import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Row, Col, Spin, Alert, Select, Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';

const { Search } = Input;

function ProductsPage() {
  const [filters, setFilters] = useState({
    category: '',
    search: '',
  });

  // Fetch products dengan React Query
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters).then((res) => res.data),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const products = data?.data || [];

  const handleCategoryChange = (value) => {
    setFilters((prev) => ({ ...prev, category: value }));
  };

  const handleSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert
          message="Error Loading Products"
          description={error.message || 'Failed to fetch products. Make sure backend is running at localhost:5000'}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Produk Kesehatan</h1>

      {/* Filters */}
      <div className="mb-6 flex gap-4 flex-wrap">
        <Select
          placeholder="Pilih Kategori"
          style={{ width: 200 }}
          allowClear
          onChange={handleCategoryChange}
          options={[
            { value: '', label: 'Semua Kategori' },
            { value: 'Vitamin', label: 'Vitamin' },
            { value: 'Supplement', label: 'Supplement' },
            { value: 'Medical Equipment', label: 'Medical Equipment' },
            { value: 'Medicine', label: 'Medicine' },
          ]}
        />

        <Search
          placeholder="Cari produk..."
          allowClear
          onSearch={handleSearch}
          style={{ width: 300 }}
          prefix={<SearchOutlined />}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" tip="Loading products..." />
        </div>
      )}

      {/* Empty State */}
      {!isLoading && products.length === 0 && (
        <Empty
          description="Tidak ada produk yang ditemukan"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}

      {/* Products Grid */}
      {!isLoading && products.length > 0 && (
        <>
          <p className="text-gray-600 mb-4">
            Menampilkan {products.length} produk
          </p>
          
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}

export default ProductsPage;

