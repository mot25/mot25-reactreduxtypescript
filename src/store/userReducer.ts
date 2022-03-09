import { EUserState, Iaction, UserState } from "../types/types";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

export const UserReducer = (
  state = initialState,
  action: Iaction
): UserState => {
  switch (action.type) {
    case EUserState.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: []
      };
    case EUserState.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: [...state.users, ...action.payload]
      };
    case EUserState.FETCH_USERS_ERROR:
      return {
        loading: false,
        error: action.payload,
        users: []
      };
    default:
      return state;
  }
};
