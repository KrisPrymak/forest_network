import { InferActionsTypes } from './reduxStore';
let initialState = {}

type InitialStateType = typeof initialState;

const actions = {

}

type ActionsTypes = InferActionsTypes<typeof actions>

const sidebarReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  return state;
};

export default sidebarReducer;