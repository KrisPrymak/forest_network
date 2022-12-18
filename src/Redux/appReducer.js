import { getAuth } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
})

export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuth());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }

export default appReducer;