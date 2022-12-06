import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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

      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
