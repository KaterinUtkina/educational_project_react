import React from "react";
import stl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        avatar={post.userAvatar} key={post.id}/>)
    let newPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={stl.block_add_posts}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}
                              placeholder="напишите что-нибудь!"/>
                </div>
                <div>
                    <button onClick={onAddPost} className={stl.button_add_post}>Add post</button>
                </div>
            </div>
            <div className={stl.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;