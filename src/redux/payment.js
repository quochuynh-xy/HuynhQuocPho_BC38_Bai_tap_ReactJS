import produce from "immer";
import * as types from "./type/const";
const initState = [
  { soGhe: "F6", gia: 75000 },
  { soGhe: "F7", gia: 75000 },
];
const paymentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART: {
      const cloneState = [...state];
      const index = cloneState.findIndex(
        (seat) => seat.soGhe === payload.soGhe
      );
      if (payload.daDat === false && index === -1) {
        cloneState.push(payload);
      }
      if(index !== -1) { cloneState.splice(index, 1)}
      return cloneState;
    }
    case types.REMOVE_FROM_BILL: {
        return produce(state, draft => {
        const index = draft.findIndex(item => item.soGhe === payload);
        draft.splice(index, 1)
        })
    }
    default:
      return state;
  }
};
export default paymentReducer;
