import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };


  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.addPost}>
        <div>
          <textarea 
          className={s.textarea}
          onChange={onPostChange} 
          placeholder='tell anything...'
          ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost} className={s.button}>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
