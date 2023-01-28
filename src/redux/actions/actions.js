import * as types from "../type/const"
export const actionRemoveFromCart = (data)=> {
    return {
        type: types.REMOVE_FROM_BILL,
        payload: data
    }
}
export const actionAddToCart = (data)=> {
    return {
        type: types.ADD_TO_CART,
        payload: data
    }
}