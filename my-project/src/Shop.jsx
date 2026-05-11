import Card from "./Card";

function Shop({ flowers, search, setSearch, cart, addToCart, removeFromCart, placeOrder }) {
  const filteredFlowers = flowers.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      {/* Search box */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search flowers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded w-60"
        />
      </div>

      {/* Flower cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {filteredFlowers.map((flower) => (
          <Card key={flower.id} flower={flower} onAdd={addToCart} />
        ))}
      </div>

      {/* Cart */}
      <div className="bg-white p-5 rounded-xl shadow-md max-w-md mx-auto">
        <h3 className="text-xl font-bold mb-3">🛒 Your Cart</h3>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {item.name} - ₹{item.price}
            </span>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 font-semibold"
            >
               Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <p className="mt-3 font-bold">Total: ₹{totalPrice}</p>
            <button
              onClick={placeOrder}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Shop;