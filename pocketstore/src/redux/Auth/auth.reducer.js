import { SIGNUP, AUTH_LOGIN } from "./auth.type";

const intialState = {
  signupdata: "",
  loginData:''
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case SIGNUP :{
        // console.log(payload);
        return {
            ...state,
            signupdata:payload
        }
    }

    case AUTH_LOGIN:{
      return{
        ...state,
        loginData:payload
      }
    }
    default :
    return state
  }
};
