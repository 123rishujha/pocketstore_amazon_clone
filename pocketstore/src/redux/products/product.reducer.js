import * as types from "./product.types";

const initialState = {
  loading: false,
  error: false,
  products: []
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCTS_REQUEST: {
      return { ...state, loading: true };
    }

    case types.PRODUCTS_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload
      };
    }

    case types.POST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload
      };
    }

    default: {
      return state;
    }
  }
};
