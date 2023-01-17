import React from "react";
import { PostType } from "../../../types";
//@ts-ignore
import s from "./MyPosts.module.css";
import MyPostsReduxForm from "./MyPostsForm";
import Post from "./Post/Post";

type PropsType = {
  posts: Array<PostType>
  addPost: (text: string) => void
  newPostText: string
}

type postTextValuesType = {
  postText: string
}

const MyPosts: React.FC<PropsType> = React.memo(({posts, addPost, newPostText}) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = (values: postTextValuesType) => {
    addPost(values.postText);
    values.postText = '';
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
});

export default MyPosts;