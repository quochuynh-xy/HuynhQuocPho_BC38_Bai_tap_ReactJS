import * as types from "../const/types";
export const actionFetchData = (data)=> {
    return {
        type: types.UPDATE_USER_DATA,
        payload: data
    }
}
export const actionUpdateUserData = (data)=> { 
    return {
        type: types.EDIT_USER_DATA,
        payload: data
    }
}
export const actionLookingForUser = (data)=> { 
    return {
        type: types.LOOKING_FOR_USER,
        payload: data
    }
}