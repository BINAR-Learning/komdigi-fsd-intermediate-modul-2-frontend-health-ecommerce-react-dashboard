// TODO: Import Card, Button dari antd
// TODO: Import useCart dari context

function ProductCard({ product }) {
  // TODO: Get addToCart function dari CartContext

  // TODO: Handle add to cart click

  // TODO: Create card layout dengan:
  // - Product image
  // - Product name & category
  // - Price (format currency)
  // - Add to cart button

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.category}</p>
      <p className="text-xl font-bold text-blue-600 mt-2">
        Rp {product.price?.toLocaleString("id-ID")}
      </p>

      <p className="text-gray-500 text-sm mt-2">
        TODO: Add "Tambah ke Keranjang" button!
      </p>
    </div>
  );
}

export default ProductCard;
