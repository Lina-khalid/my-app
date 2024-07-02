import React, { useEffect, useState } from 'react';
import '../shoppingCart.css';
import { Link } from 'react-router-dom'; // Import Link component
import BakeryLogo from '../images/BakeryLogo.png';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
    const price = calculateTotalPrice(cartData);
    setTotalPrice(price);
  }, []);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((acc, cake) => acc + (cake.price * cake.quantity), 0);
  };

  const updateCart = (updatedCart) => {
    const price = calculateTotalPrice(updatedCart);
    setCart(updatedCart);
    setTotalPrice(price);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    if (window.confirm(`Are you sure you want to remove ${cart[index].name} from your cart?`)) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      updateCart(updatedCart);
    }
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };

  return (
    <div>
      <Link to="/"><img id='BakeryLogo3' src={BakeryLogo} alt="Bakery Logo" /></Link>
      <div id="background" />
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
        <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/cakes">Cakes</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="table-responsive">
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th scope="col" className="h5">Shopping Cart</th>
                      <th scope="col">Type</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((cake, index) => (
                      <tr key={index}>
                        <td scope="row">
                          <div className="d-flex align-items-center">
                            <img src={cake.image} className="img-fluid rounded-3" style={{ width: 120 }} alt={cake.name} />
                            <div className="flex-column ms-4">
                              <p className="mb-0 cakeTitle">{cake.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: 500 }}>{cake.name}</p>
                        </td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center">
                            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decrementQuantity(index)}>-</button>
                            <span>{cake.quantity}</span>
                            <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => incrementQuantity(index)}>+</button>
                          </div>
                        </td>
                        <td className="align-middle">
                          <p className="mb-0" style={{ fontWeight: 500 }}>{cake.price * cake.quantity} SAR</p>
                        </td>
                        <td className="align-middle">
                          <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(index)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                className="card shadow-2-strong mb-5 mb-lg-0"
                style={{ borderRadius: 16 }}
              >
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                      <form>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1v"
                              defaultValue=""
                              aria-label="..."
                              defaultChecked=""
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-mastercard fa-2x text-body pe-2" />
                              Credit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel2v"
                              defaultValue=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-visa fa-2x fa-lg text-body pe-2" />
                              Debit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel3v"
                              defaultValue=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="fab fa-cc-paypal fa-2x fa-lg text-body pe-2" />
                              PayPal
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-6">
                      <div className="row">
                        <div className="col-12 col-xl-6">
                          <div
                            data-mdb-input-init=""
                            className="form-outline mb-4 mb-xl-5"
                          >
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              size={17}
                              placeholder="Lina Alkendi"
                            />
                            <label className="form-label" htmlFor="typeName">
                              Name on card
                            </label>
                          </div>
                          <div
                            data-mdb-input-init=""
                            className="form-outline mb-4 mb-xl-5"
                          >
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YY"
                              size={7}
                              minLength={7}
                              maxLength={7}
                            />
                            <label className="form-label" htmlFor="typeExp">
                              Expiration
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6">
                          <div
                            data-mdb-input-init=""
                            className="form-outline mb-4 mb-xl-5"
                          >
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              size={17}
                              placeholder="1111 2222 3333 4444"
                              minLength={19}
                              maxLength={19}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Card Number
                            </label>
                          </div>
                          <div
                            data-mdb-input-init=""
                            className="form-outline mb-4 mb-xl-5"
                          >
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="●●●"
                              size={1}
                              minLength={3}
                              maxLength={3}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">{totalPrice} SAR</p>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0"> Free</p>
                      </div>
                      <hr className="my-4" />
                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Total (tax included): <br /> {totalPrice+totalPrice*0.15} SAR </p>
                      </div>

                      <span className='button-62'>Checkout </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
