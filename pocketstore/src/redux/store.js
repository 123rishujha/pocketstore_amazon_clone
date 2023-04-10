import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
  
import { productReducer } from "./products/product.reducer";
import { reducer } from "./Auth/auth.reducer";
import {reducer as cartReducers} from "./cart/cart.reducer"
  
const rootReducer = combineReducers({
   productReducer,
   reducer,
   cartReducers
});
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
  