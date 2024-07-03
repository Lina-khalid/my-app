import React from 'react';
import '../login.css';
import { Link } from 'react-router-dom';
import BakeryLogo from '../images/BakeryLogo.png';

class Login extends React.Component {
  componentDidMount() {
    document.body.classList.remove("sent"); // Remove the "sent" class on component mount
  }

  render() {
    return (
      <div className="login">
        <Link to="/"><img id='BakeryLogo' src={BakeryLogo} alt="Bakery Logo" /></Link>
        <input className="menu-icon2" type="checkbox" id="menu-icon2" name="menu-icon2" />
        <label htmlFor="menu-icon2"></label>
        <nav className="nav2">
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
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>

        <video className="video-bg2" src="https://videos.pexels.com/video-files/3992587/3992587-uhd_2732_1440_25fps.mp4" autoPlay muted loop></video>

        <div className="Wrapper">
          <div id="myWrapper2">
            <article className="loginLetter">
              <div className="side" style={{marginTop:"-100px"}}>
                <h1>Log In</h1>
                <form className="pt-3">
                  <div className="form-group py-2">
                    <div className="input-field">
                      <span className="far fa-user p-2" />
                      <input cl
                        type="text"
                        placeholder="Username or Email Address"
                        required=""
                        className="loginInput"
                      />
                    </div>
                  </div>
                  <div className="form-group py-1 pb-2">
                    <div className="input-field">
                      <span className="fas fa-lock p-2" />
                      <input
                        type="password"
                        placeholder="Enter your Password"
                        required=""
                        className="loginInput"
                      />
                    </div>
                  </div>
                  <button type='submit' className="btn btn-block text-center my-3">Log In</button>
                  <div className="text-center pt-3 text-muted">
                    
                    Not a member? <Link to="../signup">Sign up</Link>
                  </div>
                </form>
              </div>
              <div className="side">
              </div>
            </article>
            <div className="envelope front" />
            <div className="envelope back" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;