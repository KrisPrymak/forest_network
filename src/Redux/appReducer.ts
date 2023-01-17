import { InferActionsTypes, BaseThunkType } from './reduxStore';
import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS} as const)
}


type ThunkType = BaseThunkType<ActionsType>


export const initializeApp = (): ThunkType => {
    return async (dispatch) => {
        let promise = dispatch(getAuth());
        Promise.all([promise])
            .then(() => {
                dispatch(actions.initializedSuccess())
            })
    }}

export default appReducer;