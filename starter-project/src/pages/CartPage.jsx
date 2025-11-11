// TODO: Import useCart dari context
// TODO: Import Ant Design components (Table, Button, Empty)

function CartPage() {
  // TODO: Get cart items dari CartContext
  // Hint: const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  // TODO: Display cart items dalam Ant Design Table
  // Columns: Product, Price, Quantity, Subtotal, Actions

  // TODO: Show empty cart state jika cart kosong
  // Use Ant Design Empty component

  // TODO: Display cart total

  // TODO: Add checkout button

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Keranjang Belanja</h1>

      <p className="text-gray-600">
        TODO: Display cart items dari CartContext!
      </p>
    </div>
  );
}

export default CartPage;
