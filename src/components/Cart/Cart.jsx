
import React from "react";

const Cart = () => {
  return (
    <div>
      <a href="...">
        <i className="bi bi-cart-fill position-relative"></i>
      </a>
      <span className='top-0 start-100 translate-middle badge rounded-pill bg-danger'>
        2<span className='visually-hidden'></span>
      </span>
    </div>
  );
};

export default Cart;