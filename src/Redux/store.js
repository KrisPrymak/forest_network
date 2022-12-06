const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 3, message: "it is my first post", likesCount: 0 },
        { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
        { id: 1, message: "lalolalolaolaod", likesCount: 10 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kesha" },
        { id: 2, name: "Lalka" },
        { id: 3, name: "Musya" },
        { id: 4, name: "Kiska" },
        { id: 5, name: "Gosha" },
      ],

      messages: [
        { id: 1, message: "hello, how are you" },
        { id: 1, message: "Yo yo yo" },
        { id: 1, message: "lalalal lolo" },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default store;
