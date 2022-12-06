let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 3, message: "it is my first post", likesCount: 0 },
        { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
        { id: 1, message: "lalolalolaolaod", likesCount: 10 },
      ],
      newPostText: '',
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
  getState() {
    return this._state
  },
  _callSubscriber() {

  },
  addPost() {
    let newPost = {
      id: 4, message: this._state.profilePage.newPostText, likesCount: 0
    }
    this._state.profilePage.posts.unshift(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;
