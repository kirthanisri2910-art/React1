function Navbar({ page, setPage, cartCount }) {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🌸 Flower Shop</h1>
      
      <div className="space-x-4">
        <button 
          onClick={() => setPage("home")}
          className={`px-3 py-1 rounded ${page === "home" ? "bg-pink-500 text-white" : "hover:bg-gray-100"}`}
        >
          Home
        </button>
        <button 
          onClick={() => setPage("about")}
          className={`px-3 py-1 rounded ${page === "about" ? "bg-pink-500 text-white" : "hover:bg-gray-100"}`}
        >
          About
        </button>
        <button 
          onClick={() => setPage("shop")}
          className={`px-3 py-1 rounded ${page === "shop" ? "bg-pink-500 text-white" : "hover:bg-gray-100"}`}
        >
          Shop
        </button>
        <button 
          onClick={() => setPage("contact")}
          className={`px-3 py-1 rounded ${page === "contact" ? "bg-pink-500 text-white" : "hover:bg-gray-100"}`}
        >
          Contact
        </button>
      </div>

      <span className="font-semibold">🛒 {cartCount}</span>
    </nav>
  );
}

export default Navbar;