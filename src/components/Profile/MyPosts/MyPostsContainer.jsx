import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profileReducer";
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  };


  return ( 
    <MyPosts
    addPost={addPost}
    updateNewPostText={onPostChange}
    newPostText={state.newPostText}
    posts={state.posts}
    />
  )
};

export default MyPostsContainer;
