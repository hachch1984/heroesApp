export enum ActionType {
  login = 1,
  logout = 2,
}

export interface IAction {
  type: ActionType;
  payload: IState;
}

export interface IState {
  logged: boolean;
  name:string
}

export const authReducer = (state: IState, action: IAction):IState => {
  switch (action.type) {
    case ActionType.login:
      return { ...state, logged: true };
    case ActionType.logout:
      return { ...state, logged: false };

    default:
      return state;
  }
};
