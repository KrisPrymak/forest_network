import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id: 3, message: 'it is my first post', likesCount: 0},
    {id: 2, message: 'pumpimpampampimpum', likesCount: 120},
    {id: 1, message: 'lalolalolaolaod', likesCount: 10},
  ]

  let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
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
