import { DELETE_CART_ERROR, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCCESS } from "./cart.actionTypes"

const initialState={
    cartData:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,carts,deleted})=>{
switch(type){
    case GET_CART_REQUEST:
        return {...state,isLoading:true,isError:false}
        case GET_CART_SUCCESS:
            return {...state,isLoading:false,isError:false,cartData:carts}
            case GET_CART_ERROR:
                return {...state,isLoading:false,isError:true}
                case DELETE_CART_REQUEST:
                    return {...state,isLoading:false,isError:false}
                    case DELETE_CART_SUCCESS:
                        return {...state,isLoading:false,isError:false,cartData:deleted}
                        case DELETE_CART_ERROR:
                            return{...state,isLoading:false,isError:true}
                 default:
                     return state
    }
}