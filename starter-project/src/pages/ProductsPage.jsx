// TODO: Import useQuery from @tanstack/react-query
// TODO: Import Spin, Select, Input dari antd
// TODO: Import api functions

function ProductsPage() {
  // TODO: Use useQuery untuk fetch products
  // Hint: const { data, isLoading, error } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => api.get('/products').then(res => res.data.data)
  // })

  // TODO: Add state untuk filters (category, search)

  // TODO: Add filtering UI (Select for category, Input for search)

  // TODO: Show loading state (Ant Design Spin)

  // TODO: Show error state jika fetch fails

  // TODO: Map products ke ProductCard components

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Produk Kesehatan</h1>

      <p className="text-gray-600">
        TODO: Implement React Query untuk fetch products dari backend!
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Backend should be running at http://localhost:5000
      </p>
    </div>
  );
}

export default ProductsPage;
