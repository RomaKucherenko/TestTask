import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store