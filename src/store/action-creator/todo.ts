import axios from "axios";
import { Dispatch } from "redux";
import { ETodosActionType, IActionTodosType } from "../../types/todosTypes";

export const fetchTodos = () => {
  return async (dispatch: Dispatch<IActionTodosType>) => {
    try {
      dispatch({ type: ETodosActionType.FETCH_TODOS });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("data", data);
      dispatch({ type: ETodosActionType.FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ETodosActionType.FETCH_TODOS_ERROR,
        payload: "error todos fetch"
      });
    }
  };
};
