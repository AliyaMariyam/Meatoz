import { LOGIN,SIGHNOUT,SET_TOKEN } from "./constant"

export const login = data =>({
    type:LOGIN,
    payload:{},
})

export const signout = data =>({
    type:SIGHNOUT,
    payload:{},
})

export const setToken = token => ({
    type: SET_TOKEN,
    payload: token,
  });
  