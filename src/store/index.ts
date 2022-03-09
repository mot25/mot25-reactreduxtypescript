import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./userReducer";

const rootDeducer = combineReducers({
  first: UserReducer
});

export type RootState = ReturnType<typeof rootDeducer>;

export const store = createStore(rootDeducer, applyMiddleware(thunk));
