export interface IinitStateTodos {
  todos: any[];
  loading: boolean;
  error: null | string;
}

export enum ETodosActionType {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR"
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

export type IActionTodosType =
  | IActionTodos
  | IActionTodosSuccess
  | IActionTodosError;
