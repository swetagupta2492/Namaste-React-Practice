import { useState } from "react";
import foodFireLogo from "../../../public/Images/foodFireLogo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLogin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="Login-btn" onClick={() => setIsLogin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
