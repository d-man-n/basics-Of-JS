import React from 'react';

 const BtnLike = (props) => {
     return(
        <button 
            className = {props.liked_by_user ? "button-disliked" : "button-liked"}
            onClick = {props.toggleLiked}
        >
            {props.likes}
        </button>
     );
 }

 export default BtnLike;