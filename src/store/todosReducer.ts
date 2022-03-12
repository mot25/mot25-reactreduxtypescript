import {
  ETodosActionType,
  IActionTodosType,
  IinitStateTodos,
} from "../types/todosTypes";

const initStateTodos: IinitStateTodos = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todosReducer = (
  state = initStateTodos,
  action: IActionTodosType
): IinitStateTodos => {
  switch (action.type) {
    case ETodosActionType.FETCH_TODOS:
      return { ...state, loading: true };
    case ETodosActionType.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...action.payload],
      };
    case ETodosActionType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ETodosActionType.SET_TODO_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
