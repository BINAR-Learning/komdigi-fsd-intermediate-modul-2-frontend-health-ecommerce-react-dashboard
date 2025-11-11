// TODO: Import necessary components dari Ant Design
// Hint: Button, Card, Row, Col

function HomePage() {
  // TODO: Create hero section dengan:
  // - Welcome heading
  // - Deskripsi singkat
  // - Button navigate ke /products (use Link from react-router-dom)

  // TODO: Create features section dengan 3 cards:
  // - Card 1: Produk Berkualitas
  // - Card 2: Pengiriman Cepat
  // - Card 3: Harga Terjangkau

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Selamat Datang di Health E-Commerce
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          TODO: Add hero content & features cards here!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
