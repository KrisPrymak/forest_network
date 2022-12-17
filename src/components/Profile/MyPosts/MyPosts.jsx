import React from "react";
import s from "./MyPosts.module.css";
import MyPostsReduxForm from "./MyPostsForm";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.postText);
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddPost} newPostText={props.newPostText} />
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
