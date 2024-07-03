import React, { useState, useEffect } from 'react';
import '../cakes.css';
import { Link } from 'react-router-dom';
import BakeryLogo from '../images/BakeryLogo.png';
import vanillaCake from '../images/vanilla.png';
import cocoaCake from '../images/chocolateCake.png';
import lemonCake from '../images/lemonCake.png';
import strawberryCake from '../images/strawberryCake.png';
import blueberryCake from '../images/pupuleCake.png';
import grapefruitCake from '../images/grapefruitCake.png';

const cakes = [
  {
    name: "Vanilla Cake",
    price: 230,
    image: vanillaCake,
    description: "A timeless classic with a moist and fluffy texture, infused with the rich aroma of pure vanilla."
  },
  {
    name: "Chocolate Cake",
    price: 200,
    image: cocoaCake,
    description: "Indulge in the velvety goodness of our decadent chocolate cake, crafted with the finest cocoa for a rich and irresistible treat."
  },
  {
    name: "Lemon Cake",
    price: 190,
    image: lemonCake,
    description: "Experience a refreshing zing with our tangy lemon cake, featuring a light and airy texture that perfectly balances sweetness and citrus zest."
  },
  {
    name: "Strawberry Cake",
    price: 210,
    image: strawberryCake,
    description: "Bursting with the irresistible sweetness of ripe, juicy strawberries, this cake brings a taste of summer to every bite."
  },
  {
    name: "Blueberry Cake",
    price: 250,
    image: blueberryCake,
    description: "Indulge in the natural sweetness of plump blueberries with our blueberry cake, filled with bursts of juicy fruit and often topped with a light and creamy frosting."
  },
  {
    name: "Grapefruit Cake",
    price: 200,
    image: grapefruitCake,
    description: "Discover a unique and refreshing twist with our grapefruit cake, featuring a delicate balance of tangy grapefruit zest and a subtle sweetness in a moist and luscious cake."
  }
];

const Cakes = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const newTotalPrice = cart.reduce((acc, cake) => acc + cake.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const addToCart = (cake) => {
    setCart([...cart, { ...cake, quantity: 1 }]);
  };
  

  return (
    <div className='Cakes'>
      <div id="background" />
      <Link to="/"><img id='BakeryLogo2' src={BakeryLogo} alt="Bakery Logo" /></Link>
      <input className="menu-icon5" type="checkbox" id="menu-icon5" name="menu-icon5" />
      <label htmlFor="menu-icon5"></label>
      <nav className="nav5">
        <ul className="pt-5">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cakes">Cakes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      {cakes.map((cake, index) => (
        <div className="cakeDivWrapper2" key={index}>
          <div className='cakeDiv'>
            {cake.name === "Blueberry Cake" && (
              <div className="scale-down">
                <div className="wrap">
                  <div className="sticker"></div>
                  <div className="msg">new!</div>
                </div>
              </div>
            )}
            <div className="cakePhotoMenuContainer">
              <img className='cakePhotoMenu' src={cake.image} alt={cake.name} />
            </div>
            <p className='cakeTitleMenu'>{cake.name}</p>
            <p className='cakeDescMEnue'>{cake.description}</p>
            <h3 className='cakePrice'>{cake.price} SR</h3>
            <button className="button-62" role="button" onClick={() => addToCart(cake)}>Add to cart</button>
          </div>
        </div>
      ))}

      <footer>
        <Link to="/shoppingCart" id="cart-symbol">
          <i className="fas fa-shopping-cart"></i>
          <span id='cartSize'>{cart.length}</span>
        </Link>
      </footer>
    </div>
  );
}

export default Cakes;
