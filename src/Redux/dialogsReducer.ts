import { InferActionsTypes } from './reduxStore';
const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: "Kesha" },
    { id: 2, name: "Lalka" },
    { id: 3, name: "Musya" },
    { id: 4, name: "Kiska" },
    { id: 5, name: "Gosha" },
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: "hello, how are you" },
    { id: 1, message: "Yo yo yo" },
    { id: 1, message: "lalalal lolo" },
  ] as Array<MessageType>,
}

export type InitialStateDialogsType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsDialogs>

export const actionsDialogs = {
  sendMessage: (newMessageBody: string) => ({
    type: SEND_MESSAGE, 
    newMessageBody
  } as const)
}


const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateDialogsType => {
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



export default dialogsReducer;

