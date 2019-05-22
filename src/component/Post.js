import React from "react";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        <NavLink to="/">Back to Post </NavLink>
        <button id="delete-btn">Delete Post</button>

        <h4>Title:{props.state.Data[props.id].title}</h4>
        <h4>Category:{props.state.Data[props.id].category}</h4>
        <h4>Text:{props.state.Data[props.id].text}</h4>
      </p>
    </div>
  );
};
export default Post;
