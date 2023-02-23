import { getProductAPI, postProductAPI } from "./api";
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
