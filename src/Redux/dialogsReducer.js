const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 3,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;

