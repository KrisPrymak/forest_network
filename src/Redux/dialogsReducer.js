const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESAAGE-BODY";

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

  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 3,
        message: state.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: ''
      }
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
