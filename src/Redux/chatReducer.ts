import { ChatMessageType } from "./../components/ChatPage/Message";
//@ts-ignore
import { InferActionsTypes, BaseThunkType } from "./reduxStore";
import { chatAPI } from "../api/chatAPI";
import { Dispatch } from "redux";
import { StatusType } from "../types";

let initialState: InitialState = {
  messages: [],
  status: 'pending'
};

type InitialState = {
  messages: ChatMessageType[],
  status: StatusType,
}

const chatReducer = (
  state = initialState,
  action: ActionsType
): InitialState => {
  switch (action.type) {
    case "messagesReceived":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages],
      };
    case "statusChanged":
      return {
        ...state,
        status: action.payload.status
      }
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({
      type: "messagesReceived",
      payload: { messages },
    } as const),
    statusChanged: (status: StatusType) => ({
      type: "statusChanged",
      payload: { status }
    } as const)
};

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

let _newMessageHandlerCreator: ((messages: ChatMessageType[]) => void) | null =
  null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandlerCreator === null) {
    _newMessageHandlerCreator = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMessageHandlerCreator;
};

let _statusChangedHandlerCreator: ((status: StatusType) => void) | null =
  null;

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandlerCreator === null) {
    _statusChangedHandlerCreator = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _statusChangedHandlerCreator;
};

export const startMessagesListining = (): ThunkType => async (dispatch) => {
  chatAPI.start()
  chatAPI.subscribe('message-received', newMessageHandlerCreator(dispatch));
  chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListining = (): ThunkType => async (dispatch) => {
  chatAPI.unsubscribe('message-received', newMessageHandlerCreator(dispatch));
  chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
  chatAPI.stop()
};

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
  chatAPI.sendMessage(message)
}

export default chatReducer;
