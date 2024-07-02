import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import BakeryLogo from './images/BakeryLogo.png';

function App() {
  return (
    <div className="App">
      <Link to="/"><img id='BakeryLogo' src={BakeryLogo} alt="Bakery Logo" /></Link>
      <video className="video-bg2" src="https://videos.pexels.com/video-files/3992461/3992461-uhd_2732_1440_25fps.mp4" autoPlay muted loop></video>


      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
        <li>
            <Link to="/">Home</Link>
          </li>
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

      <h1 id="homePageTitle">Delicious</h1>

      <h2 id="homePageSubtitle">
        <span className="dash-link"></span>CAKES FOR YOU
      </h2>
      

      <p id="homePagePara">
        Discover artisanal cakes crafted with love and creativity,
        <br /> perfect for every occasion, at Fruity Cakes Shop
      </p>

      <div className="container">
        <Link to="/cakes" className="button type--A">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">SHOP NOW</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </Link>
      </div>
    </div>
  );
}

export default App;