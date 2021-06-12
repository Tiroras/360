import {IUserInfo} from "../interfaces/User.types";
import {Dispatch} from "redux";


const initialState = {
  user:{
    isIn: false,
    token: null,
    info: {
      id: 0,
      user_name: "",
      user_position: '',
      isAdmin: false,
      login: '',
      email: ""
    }
  }
}

type TState = typeof initialState;
type UserActionsType = ReturnType<typeof setInAC> | ReturnType<typeof setToken> |
  ReturnType<typeof setUserInfoAC>

const userReducer = (state: TState = initialState, action: UserActionsType) => {
  switch (action.type) {
    case "SET-IN": {
      return {...state, user: {...state.user, isIn: action.isIn}}
    }
    case "SET-USER-INFO": {
      return {...state, user: {...state.user, info: action.info}}
    }
    case "SET-TOKEN": {
      return {...state, user: {...state.user, token: action.token}}
    }
    default: return state;
  }
}

export const setInAC = (isIn: boolean) => ({type: "SET-IN", isIn} as const);
export const setUserInfoAC = (info: IUserInfo) => ({type: "SET-USER-INFO", info} as const);
export const setToken = (token) => ({type: "SET-TOKEN", token} as const);


export const setUser = (info: IUserInfo) => (dispatch: Dispatch<UserActionsType>) => {
  dispatch(setInAC(true));
  dispatch(setUserInfoAC(info));
}
export const logout = () => (dispatch: Dispatch<UserActionsType>) => {
  dispatch(setInAC(false));
  dispatch(setUserInfoAC({
    id: 0,
    user_name: "",
    user_position: '',
    isAdmin: false,
    login: '',
    email: ""
  }))
}

// export const authentication = (id: number) => (dispatch: any) => {
//   return authAPI.getMe(id).then((res: AxiosResponse) => {
//     if(res.status === 0){
//       const {id, user_name, user_position, isAdmin, login, email} = res.data;
//       dispatch(setUser({id, user_name, user_position, isAdmin, login, email}));
//     }
//   });
// }

export const login = (token: string, userInfo: any) => (dispatch: any) => {
  dispatch(setToken(token));
  dispatch(setUserInfoAC(userInfo));
  dispatch(setInAC(true));

}

// export const registration = (email: string, password: string) => (dispatch) => {
//   // console.log("You here", email, password)
//   // authAPI.postRegistr(email, password).then((res: AxiosResponse) => {
//   //   console.log(res);
//   // });
// }

export default userReducer;