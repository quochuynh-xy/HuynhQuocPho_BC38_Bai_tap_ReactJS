import produce from "immer";
const initState = {
  userList: [
    {
      fullName: "fullName 1",
      phoneNumber: 71,
      emailAdress: "emailAdress 1",
      Id: "1",
      userId: "001"
    },
    {
      fullName: "fullName 2",
      phoneNumber: 51,
      emailAdress: "emailAdress 2",
      Id: "2",
      userId: "002"
    },
  ],
  selectedStudent: null
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "user/UPDATE_USER_DATA": {
      return produce( state , draffState => {
         draffState.userList = action.payload
      })
    }
    case "user/EDIT_USER_DATA": {
        return produce( state, draff => {
            draff.selectedStudent = action.payload
        })
    }
    default:
      return state;
  }
};
export default userReducer;
