import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class UserList extends Component {
  handleDeleteStudent = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://638b06ad7220b45d22866946.mockapi.io/btbuoi_21/QuanLyNhanVien/${userId}`,
      });
      this.props.fetchDataFromAPI()
    } catch (error) {
      console.log(error);
    }
  };
  handleEditStudent = (userId) => {
    axios({
        method: "GET",
        url: `https://638b06ad7220b45d22866946.mockapi.io/btbuoi_21/QuanLyNhanVien/${userId}`
    })
    .then(res => {
        this.props.dispatch({
            type: "user/EDIT_USER_DATA",
            payload: res.data
        })
        return res.data
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex mb-2">
          <input className="w-50" type="text" />
          <button className="btn btn-danger ms-3">Tìm kiếm</button>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr className="bg-dark text-white text-center">
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Tuỳ chọn</th>
            </tr>
          </thead>
          <tbody>
            {this.props.usersList.map((user) => {
              return (
                <tr key={user.Id}>
                  <td>{user.userId}</td>
                  <td>{user.fullName}</td>
                  <td>{user.emailAdress}</td>
                  <td>{user.phoneNumber}</td>
                  <td className="text-center">
                    <button className="btn btn-primary"
                        onClick={()=> {this.handleEditStudent(user.Id)}}
                    >Sửa</button>
                    <button className="btn btn-secondary ms-3"
                        onClick={()=> {this.handleDeleteStudent(user.Id)}}
                    >Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    usersList: state.userReducer.userList,
  };
};
export default connect(mapStateToProps, null)(UserList);