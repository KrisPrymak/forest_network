import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../Redux/reduxStore";
import { actionsProfile } from "../../../Redux/profileReducer";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const addPost = actionsProfile.addPost;

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
