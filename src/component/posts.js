import React from "react";
import "../component/style/style.css";

const Posts = (props) => {
  return (
    <div>
      <h1>Welcome to my Pages</h1>
      <button id="add-btn">Add Post</button>
      <span>My day in integrify</span> <span>Work</span>
      <span>My talk at React Meetup</span> <span>Speech</span>
      <span>Fun at the beach</span> <span>Recreation</span>
      <span>Running in the forest</span> <span>Sport</span>
    </div>
  );
};

export default Posts;
