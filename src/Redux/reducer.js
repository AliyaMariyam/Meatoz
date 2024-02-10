import { LOGIN,SIGHNOUT,SET_TOKEN } from "./constant";
  
  const initialState = {
    isLoggedIn: false,
    token: null,
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

        case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      default:
        return state;
    }


  };
  