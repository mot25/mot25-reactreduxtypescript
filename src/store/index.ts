import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todosReducer";
import { UserReducer } from "./userReducer";

const rootDeducer = combineReducers({
  users: UserReducer,
  todos: todosReducer
});

export type RootState = ReturnType<typeof rootDeducer>;

export const store = createStore(rootDeducer, applyMiddleware(thunk));
