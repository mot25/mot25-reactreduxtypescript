export interface IinitStateTodos {
  todos: Array<any>;
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum ETodosActionType {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

export interface IActionTodos {
  type: ETodosActionType.FETCH_TODOS;
}
export interface IActionTodosSuccess {
  type: ETodosActionType.FETCH_TODOS_SUCCESS;
  payload: any[];
}
export interface IActionTodosError {
  type: ETodosActionType.FETCH_TODOS_ERROR;
  payload: string;
}
export interface ISetTodoPage {
  type: ETodosActionType.SET_TODO_PAGE;
  payload: number;
}

export type IActionTodosType =
  | IActionTodos
  | IActionTodosSuccess
  | IActionTodosError
  | ISetTodoPage;
