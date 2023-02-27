import { getProductAPI, postProductAPI,patchProductAPI } from "./api";
import * as types from "./product.types";

export const productRequest = () => {
  return { type: types.PRODUCTS_REQUEST };
};

export const productError = () => {
  return { type: types.PRODUCTS_ERROR };
};

export const getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload };
};

export const updateProductsSuccess = (payload) => {
  return { type: types.UPDATE_PRODUCTS, payload };
};

export const getProducts = (getProductParams) => async (dispatch) => {
  dispatch(productRequest());
  try {
    let data = await getProductAPI(getProductParams);
    dispatch(getProductsSuccess(data));
  } catch (e) {
    dispatch(productError());
  }
};

export const postProducts = (data) => async (dispatch) => {
  dispatch(productRequest());
  try {
    let res = await postProductAPI(data);
    getProducts();
  } catch (e) {
    dispatch(productError());
  }
};

export const updateProducts = (id, quantity) => async (dispatch) => {
  dispatch(productRequest());
  try {
    let res = await patchProductAPI (id, quantity);
    // console.log("called");
    // console.log("res", res);
    dispatch(getProducts());
  } catch (e) {
    dispatch(productError());
  }
};
