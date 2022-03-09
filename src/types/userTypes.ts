export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export enum EUserState {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

export interface FetchedAction {
  type: EUserState.FETCH_USERS;
}
export interface FetchedActionSuccess {
  type: EUserState.FETCH_USERS_SUCCESS;
  payload: any[];
}
export interface FetchedActionError {
  type: EUserState.FETCH_USERS_ERROR;
  payload: string;
}

export type Iaction = FetchedAction | FetchedActionSuccess | FetchedActionError;
