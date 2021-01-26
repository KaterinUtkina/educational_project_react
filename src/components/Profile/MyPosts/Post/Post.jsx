import React from "react";
import stl from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={stl.post_item}>
            <div className={stl.post_item_message}>
                {props.message}
            </div>
            <img className={stl.post_avatar} src={props.avatar} alt="avatar_user"/>
            <div className={stl.post_like}>
                Like <span> {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;