import { LOGIN,SIGHNOUT } from "./constant"

export const login = data =>({
    type:LOGIN,
    payload:{},
})

export const signout = data =>({
    type:SIGHNOUT,
    payload:{},
})