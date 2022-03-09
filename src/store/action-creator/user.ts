import axios from "axios";
import { Dispatch } from "redux";
import { EUserState, Iaction } from "../../types/userTypes";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Iaction>) => {
    try {
      dispatch({ type: EUserState.FETCH_USERS });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("data", data);
      dispatch({ type: EUserState.FETCH_USERS_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: EUserState.FETCH_USERS_ERROR,
        payload: "error fetch users"
      });
    }
  };
};
