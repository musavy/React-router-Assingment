import React from "react";
import "../component/style/style.css";
const newPost = () => {
  return (
    <div>
      <div className="span-P">
        <span>Title:</span> <input type="text" name="title" id="title" />
        <span>Category:</span> <input type="text" name="category" id="cate" />
      </div>

      <div className="text-area">
        <h3 id="h-3">Write New Post</h3>
        <textarea name="" id="" cols="30" rows="10" />
        <button id="save-btn">Save</button>
        <button id="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default newPost;
