// Name of file shoule be same as component name => convention followed
// we can use .js or .jsx extensions even .tsx, so what is a good way? .js can be followed, .jsx also can be used it hardly matters don't overthink.

import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //-------- useEffect() --------------
  //If no dependency array => useEffect is called on every render cycle (initial + after every re-render)
  //useEffect(() => console.log("useEffect called"));

  //If dependency array is empty = [] => useEffect is called only on initial render i.e. only once when the component completes first render.
  //useEffect(() => console.log("useEffect called"), []);

  //If dependency array is [btnName] => useEffect is called on inital render + everytime btnName is updated
  useEffect(() => console.log("useEffect called"), [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {/* We should never use <a> to redirect in React, because it will reload the page.
            Link component given by react-router-dom should be used & it is superpower which doesn't reload the page. Link is a wrapper over <a>, internally link still uses <a> tag only because browser at the end understand <a> but it keeps track of all routes or href we can say.
          */}
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
              className="login-btn"
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
