import authReducer from "./reducers/authReducer";
import homeReducer from "./reducers/homeReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = {
  home: homeReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
};
export default rootReducer;
