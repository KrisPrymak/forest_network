import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }


  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div className={s.addPost}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPost} className={s.button}>Add post</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
