import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from './musicReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
});

let store = createStore(reducers);

export default store;

//route
//src comp jsx css cntainer
//navbar
//store vetka
//reducer initial state
//layout css map key mapState
//логика
    //onclick mapdispatch
    //container dispatch
    //reducer 
        //action cretot
        //action type
        //switch
