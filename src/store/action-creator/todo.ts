import axios from "axios";
import { Dispatch } from "redux";
import { ETodosActionType, IActionTodosType } from "../../types/todosTypes";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<IActionTodosType>) => {
    try {
      dispatch({ type: ETodosActionType.FETCH_TODOS });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      console.log(data);

      dispatch({ type: ETodosActionType.FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ETodosActionType.FETCH_TODOS_ERROR,
        payload: "error todos fetch",
      });
    }
  };
};

export const editPage = (page: number): IActionTodosType => {
  return { type: ETodosActionType.SET_TODO_PAGE, payload: page };
};
