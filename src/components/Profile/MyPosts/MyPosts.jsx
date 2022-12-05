import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.state.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.addPost}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button className={s.button}>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
