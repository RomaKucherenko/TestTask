import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from "redux-form"
import thunkMiddleware from "redux-thunk"
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
        form: formReducer,
        users: usersReducer,
        profile: profileReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store