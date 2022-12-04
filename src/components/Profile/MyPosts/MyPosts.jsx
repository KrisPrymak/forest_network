import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.addPost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message='it is my first post'/>
        <Post message='hello how are you'/>
        <Post message='lalolalolaolaod'/>
      </div>
    </div>
  );
};

export default MyPosts;
