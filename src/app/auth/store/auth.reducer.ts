import { UserModel } from "../user.model";

export interface State {
  user: UserModel;
}

const initialState: State = {
  user: null
};

export function AuthReducer(state = initialState, action) {
  return state;
}
