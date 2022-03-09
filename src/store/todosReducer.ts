import {
  ETodosActionType,
  IActionTodosType,
  IinitStateTodos
} from "../types/todosTypes";

const initStateTodos: IinitStateTodos = {
  todos: [],
  loading: false,
  error: null
};

export const todosReducer = (
  state = initStateTodos,
  action: IActionTodosType
) => {
  switch (action.type) {
    case ETodosActionType.FETCH_TODOS:
      return { error: null, todos: [], loading: true };
    case ETodosActionType.FETCH_TODOS_SUCCESS:
      return {
        error: null,
        loading: false,
        todos: [...state.todos, ...action.payload]
      };
    case ETodosActionType.FETCH_TODOS_ERROR:
      return { loading: false, todos: [], error: action.payload };

    default:
      return state;
  }
};
