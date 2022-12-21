
import React from "react";

const Cart = () => {
  return (
    <div>
      <a href="...">
        <i className="bi bi-cart-fill position-relative"></i>
      </a>
      <span className=" cart-counter position-absolute bg-white text-center translate-middle h5 ">
        0
      </span>
    </div>
  );
};

export default Cart;