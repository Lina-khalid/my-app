import React from 'react';
import '../about.css';
import { Link } from 'react-router-dom';
import BakeryLogo from '../images/BakeryLogo.png';
const About = () => {
  return (
    <div>
      <Link to="/"><img id='BakeryLogo4' src={BakeryLogo} alt="Bakery Logo" /></Link>
  <input className="menu-icon4" type="checkbox" id="menu-icon4" name="menu-icon4" />
      <label htmlFor="menu-icon4"></label>
      <nav className="nav4">
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
   
       <video className="video-bg3" src="https://videos.pexels.com/video-files/3992465/3992465-uhd_2732_1440_25fps.mp4" autoPlay muted loop></video>

  <section className="about-us">
    <div className="about">
      <h2>About Us</h2>
      <div className="text">
        
        <h5>
        Welcome to our story at <span>Healthy Cake</span>
        </h5>
        <p className="first-part">
    Born out of a passion for baking and a commitment to promoting wellness,
    we saw a growing demand for healthier dessert options.
    Our mission began with the goal of crafting cakes that marry delicious taste
    with a wholesome lifestyle.
  </p>
  <p className="second-part">
    What sets our cakes apart is our dedication to using only the finest ingredients.
    We meticulously choose organic, locally sourced produce and prioritize natural
    sweeteners that are not only low in calories but also deliver rich, satisfying
    flavors.
  </p>
        <div className="data">
          <Link className="shop" to={"/cakes"}>Shop Now</Link>
            
      
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default About;
