import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    { id: 3, message: "it is my first post", likesCount: 0 },
    { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
    { id: 1, message: "lalolalolaolaod", likesCount: 10 },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      }
    }
    
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state;
  }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });

// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})



export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
                  .then(response => {
                      dispatch(setStatus(response.data))
                  })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
                .then(response => {
                  if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                  }
                })
  }
}

export default profileReducer;
