import React, { useState } from 'react';
import '../contact.css';
import { Link } from 'react-router-dom';
import BakeryLogo from '../images/BakeryLogo.png';

class Contact extends React.Component {
  componentDidMount() {
    document.body.classList.remove("sent"); // Remove the "sent" class on component mount
  }

  addClass = () => {
    document.body.classList.add("sent");
  };

  render() {
    return (
      <div>  
        <Link to="/"><img id='BakeryLogo' src={BakeryLogo} alt="Bakery Logo" /></Link>
        <input className="menu-icon3" type="checkbox" id="menu-icon3" name="menu-icon3" />
        <label htmlFor="menu-icon3"></label>
        <nav className="nav3">
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
   
       <video className="video-bg" src="https://videos.pexels.com/video-files/3992584/3992584-uhd_2732_1440_25fps.mp4" autoPlay muted loop></video>

        <div id='myWrapper'>
          <article className="letter">
            <div className="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message"></textarea>
              </p>
            </div>
            <div className="side">
              <p>
                <input type="text" placeholder="Your name" />
              </p>
              <p>
                <input type="email" placeholder="Your email" />
              </p>
              <p>
                <button id="sendLetter" onClick={this.addClass}>Send</button>
              </p>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <p className="result-message centered" style={{ top:"150px"}}>Thank you for your message</p>
      </div>
    );
  }
}

export default Contact;