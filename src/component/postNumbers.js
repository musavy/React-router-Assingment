import React from "react";
import {NavLink} from 'react-router-dom'
import "../component/style/style.css";

export const postNumbers = (props) => { console.log(props.state)
  return (
    <div>
      <ol>
        
        {props.state.Data.map((post) => {
          return (
            <li>
              {" "}
              <NavLink to={`/Post/${post.id}`}>
                {post.id} {post.text}
              </NavLink>
            </li>
          );
        })}
        
      </ol>
     
    </div>
  );
};

export default postNumbers;
