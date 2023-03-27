import "./HomeBar.css";
import { Button } from "@aws-amplify/ui-react";
import { NavLink } from "react-router-dom";

function HomeBar() {
  return (
    <div className="HomeBarDiv">
      <ul>
        <li>
          <NavLink style={({isActive}) => (isActive)? {color: "white"}: undefined} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => (isActive)? {color: "white"}: undefined} to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => (isActive)? {color: "white"}: undefined} to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => (isActive)? {color: "white"}: undefined} to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HomeBar;
