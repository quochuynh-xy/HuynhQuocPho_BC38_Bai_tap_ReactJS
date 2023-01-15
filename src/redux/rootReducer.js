import { combineReducers } from "redux";
import seatsReducer from "./seatChartReducer";
import paymentReducer from "./payment";
const rootReducer = combineReducers({
    seatsReducer,
    paymentList: paymentReducer
});
export default rootReducer