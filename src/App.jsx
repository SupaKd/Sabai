import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [address, setAddress] = useState(
    () =>
      JSON.parse(localStorage.getItem("address")) || {
        name: "",
        street: "",
        city: "",
        phone: "",
      }
  );

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(
    () => localStorage.setItem("address", JSON.stringify(address)),
    [address]
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const changeQty = (id, qty) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Number(qty) } : p))
    );

  const removeItem = (id) => {
    if (id === "all") {
      setCart([]);
    } else {
      setCart((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <BrowserRouter>
      <Header cartCount={totalItems} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route path="/menu" element={<Menu addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              changeQty={changeQty}
              removeItem={removeItem}
              total={total}
            />
          }
        />

        <Route
          path="/address"
          element={<Address address={address} setAddress={setAddress} />}
        />

        <Route
          path="/checkout"
          element={
            <Checkout total={total} address={address} setCart={setCart} />
          }
        />

        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
