import React from "react";
import Products from "./components/Page/Products";
import Modal from "./components/atoms/Modal";

function App() {
  return (
    <div className="container">
      <Modal />
      <Products />
    </div>
  );
}

export default App;
