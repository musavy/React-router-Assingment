import React from "react";
import "../component/style/style.css";
import { NavLink } from "react-router-dom";
import PostNumber from "../component/postNumbers";

const Posts = (props) => {
  return (
    <div>
      <div>
        <NavLink to="/newPost">
          <button id="add-btn">Add Post</button>
        </NavLink>
        <PostNumber state={props.state} />
      </div>
    </div>
  );
};

export default Posts;
