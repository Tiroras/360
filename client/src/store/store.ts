import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import userReducer from "./user-reducer";
import poolsReducer from "./pools-reducer";


const reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  pools: poolsReducer
})

export type ReducersType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

declare global {
  interface Window {
    store:any;
  }
}

window.store = store

export default store;