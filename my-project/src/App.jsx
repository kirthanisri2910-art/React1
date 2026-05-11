import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import lotus from "./assets/lotus.jpeg";
import rose from "./assets/rose.jpg";
import lily from "./assets/lily.png";
import tulip from "./assets/tulip.jpg";
import jasmine from "./assets/jasmine.png";
import sunflower from "./assets/sunflower.jpg";
import marigold from "./assets/marigold.png";
import lavender from "./assets/lavender.jpg";
import daisy from "./assets/daisy.jpg";
const flowers = [
  { id: 1, name: "Rose", price: 50, image: rose },
  { id: 2, name: "Lily", price: 70, image: lily },
  { id: 3, name: "Tulip", price: 90, image: tulip },
  { id: 4, name: "Jasmine", price: 40, image: jasmine },
  { id: 5, name: "Lotus", price: 50, image: lotus },
  { id: 6, name: "Sunflower", price: 30, image: sunflower },
  { id: 7, name: "Marigold", price: 40, image: marigold },
  { id: 8, name: "Lavender", price: 70, image: lavender },
  { id: 9, name: "Daisy", price: 60, image: daisy },
];

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  function addToCart(flower) {
    setCart([...cart, flower]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function placeOrder() {
    setCart([]);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 10000);
  }


  return (
    <div className="min-h-screen bg-pink-100">
      {/* Navbar */}
      <Navbar page={page} setPage={setPage} cartCount={cart.length} />

      {/* Order Success Message */}
      {orderPlaced && (
        <div className="bg-green-500 text-white text-center py-3">
          ✅ Order Placed Successfully!
        </div>
      )}

      {/* HOME */}
      {page === "home" && <Home />}

      {/* ABOUT */}
      {page === "about" && <About />}

      {/* SHOP */}
      {page === "shop" && (
        <Shop 
          flowers={flowers}
          search={search}
          setSearch={setSearch}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          placeOrder={placeOrder}
        />
      )}
       {/* Order Success Message */}
      {orderPlaced && (
        <div className="bg-green-500 text-white text-center py-3">
          ✅ Order Placed Successfully!
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
