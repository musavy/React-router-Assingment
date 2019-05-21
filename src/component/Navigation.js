import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/postNumbers">PostNumbers</NavLink>
          </li>
          <li>
            <NavLink to="/newPost">New Post</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
