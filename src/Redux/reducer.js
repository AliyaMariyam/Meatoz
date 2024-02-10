import { LOGIN,SIGHNOUT } from "./constant";
  
  const initialState = {
    isLoggedIn: false,
  };
  
  export const questionAppReducer = (state = initialState, action) => {

    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoggedIn : true,
        };
      case SIGHNOUT:
        return {
          ...state,
          isLoggedIn: false,
        };  
      default:
        return state;
    }
  };
  