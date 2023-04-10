import axios from "axios"
import { DELETE_CART_ERROR, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_ERROR, GET_CART_REQUEST, GET_CART_SUCCESS } from "./cart.actionTypes"


const getcartrequest=()=>{
    return {type:GET_CART_REQUEST}
}
const getcartsuccess=(carts)=>{
    return {type:GET_CART_SUCCESS,carts}
}
const getcarterror=()=>{
    return{type:GET_CART_ERROR}
}
// ................................delete.............................................................

// const deletecartrequest=()=>{
//     return {type:DELETE_CART_REQUEST}
// }
// const deletecartsuccess=()=>{
//     return {type:DELETE_CART_SUCCESS}
// }
// const deletecarterror=()=>{
//     return{type:DELETE_CART_ERROR}
// }
export const appendCart=()=>async(dispatch)=>{
dispatch(getcartrequest())
    try{
const res=await axios.get(`https://shy-headscarf-tuna.cyclic.app/cart`)
console.log(res.data)
dispatch(getcartsuccess(res.data))
    }catch(err){
        console.log(err);
        dispatch(getcarterror())
    }
}
// export const deletedata=(id)=>async(dispatch)=>{
//     dispatch(deletecartrequest())
// try{
//   const datadelete=await axios.delete(`https://shy-headscarf-tuna.cyclic.app/cart/${id}`)
//   console.log(datadelete)
//   dispatch(deletecartsuccess(datadelete))
 
// }catch(err){
//     dispatch(deletecarterror())
//     console.log(err)
// }
// }
