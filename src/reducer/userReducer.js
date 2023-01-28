import produce from "immer";
import * as types from "./const/types";
const initState = {
  userList: [
    {
      fullName: "đang tải dữ liệu",
      phoneNumber: "đang tải dữ liệu",
      emailAdress: "đang tải dữ liệu",
      Id: "",
      userId: "đang tải dữ liệu"
    },
  ],
  selectedStudent: null
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_DATA: {
      return produce( state , draffState => {
         draffState.userList = action.payload
      })
    }
    case types.EDIT_USER_DATA: {
        return produce( state, draft => {
            draft.selectedStudent = action.payload
        })
    }
    case types.LOOKING_FOR_USER: {
      const keyword = action.payload;
      return produce(state, draft => {
        draft.userList = state.userList.filter(user => {
          return user.userId.includes(keyword) === true || user.fullName.includes(keyword) === true
        })
      })
    }
    default:
      return state;
  }
};
export default userReducer;
