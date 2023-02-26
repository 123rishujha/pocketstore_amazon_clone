import { LOGIN_FAIL, LOGIN_REQUESTED, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUESTED, SIGNUP_SUCCESS } from "./auth.type";

const intialState = {
  token:"",
  user_name:"",
  loginFail:false,
  loginRequested:false,
  signup_success:false,

};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:{
      return{
        ...state,
        token:payload.token,
        user_name:payload.user_name,
        loginRequested:false,
        loginFail:false
      }
    }
    case LOGIN_REQUESTED:{
      return{
        ...state,
        loginFail:false,
        loginRequested:true,
      }
    }
    case LOGIN_FAIL:{
      return{
        ...state,
        loginRequested:false,
        loginFail:true
      }
    }

    case SIGNUP_REQUESTED:{
      return{
        ...state,
        loginRequested:true,
        loginFail:false,
        
      }
    }
    case SIGNUP_FAIL:{
      return{
        ...state,
        loginRequested:false,
        loginFail:true,
        
      }
    }
    case SIGNUP_SUCCESS:{
      return{
        ...state,
        signup_success:true,
        loginRequested:false,
        loginFail:false,
      }
    }
    default :
    return state
  }
};
