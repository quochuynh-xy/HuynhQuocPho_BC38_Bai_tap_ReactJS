import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class Form extends Component {
  state = {
    student: {
      fullName: "",
      phoneNumber: "",
      emailAdress: "",
      userId: "",
    },
    errMessenger: {
      fullName: "",
      phoneNumber: "",
      emailAdress: "",
      userId: "",
    },
  };
  handleChangeData = (e) => {
    let { id, value } = e.target;
    this.setState({
      student: { ...this.state.student, [id]: value },
      // student: { [id]: value },
    });
  };
  handleAddStudent = ({ Id, ...user }) => {
    // handleAddStudent = (user) => {
    let canAddUser = true;
    // nếu có bất kỳ chỗ nào chưa điền thì không đc
    for (let key in this.state.student) {
      if (this.state.student[key] === "") canAddUser = false;
    }
    // nếu có bất kỳ chỗ nào trong obj chứa lỗi có lỗi cũng không được
    for (let key in this.state.errMessenger) {
      if (!this.state.errMessenger[key] === false) canAddUser = false;
    }
    if (canAddUser === false) {
      // console.log("điền vào đi bạn ey");
      return;
    }
    if (Id) {
      axios({
        method: "PUT",
        url: `https://638b06ad7220b45d22866946.mockapi.io/btbuoi_21/QuanLyNhanVien/${Id}`,
        data: user,
      })
        .then(() => {
          this.props.fetchDataFromAPI();
          this.setState({
            student: {
              fullName: "",
              phoneNumber: "",
              emailAdress: "",
              userId: "",
            },
          });
        })
        .catch((err) => console.log(err));
    } else {
      axios({
        method: "POST",
        url: "https://638b06ad7220b45d22866946.mockapi.io/btbuoi_21/QuanLyNhanVien",
        data: user,
      })
        .then(() => {
          this.props.fetchDataFromAPI();
          this.setState(
            {
              student: {
                fullName: "",
                phoneNumber: "",
                emailAdress: "",
                userId: "",
              },
            },
            () => {
              alert("thêm thành công");
            }
          );
        })
        .catch((err) => console.log(err));
    }
  };
  handleCancelUpdate = () => {
    this.setState({
      student: {
        fullName: "",
        phoneNumber: "",
        emailAdress: "",
        userId: "",
      },
    });
  };
  // Mã sinh viên không được trùng, không được để trống, chỉ chứa số, dài 4 ký tự
  // Validation: Họ tên không đưỢc để trống, không chứa số
  // Validation: Số điện thoại không được để trống, không chứa số
  // Email đúng định dạng, không để trống
  validIsEmpty = (data, id) => {
    let result = true;
    let message = "";
    switch (id) {
      case "userId": {
        message = "ID";
        break;
      }
      case "phoneNumber": {
        message = "Số điện thoại";
        break;
      }
      case "fullName": {
        message = "Họ và tên";
        break;
      }
      default:
        message = "Email";
        break;
    }
    if (data.trim().length === 0) {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: message + " không được để trống",
        },
      });
      result = false;
    }
    if (data.trim().length !== 4 && id === "userId") {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: message + " gồm 4 chữ số",
        },
      });
      result = false;
    }
    if (data.trim().length < 10 && id === "phoneNumber") {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: message + " không hợp lệ",
        },
      });
      result = false;
    }
    if (result) {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: "",
        },
      });
    }
    return result;
  };
  validIsRepeat = (data, id) => {
    const status = this.state.student.Id;     // Trạng thái đang chờ hay cập nhật
    let message = "";
    let result = true;
    switch (id) {
      case "userId": {
        message = "ID";
        break;
      }
      case "phoneNumber": {
        message = "Số điện thoại";
        break;
      }
      case "fullName": {
        break;
      }
      default:
        message = "Email";
        break;
    }
    let index = this.props.usersList.findIndex((user) => {
      return user[id] === data;
    });
    if(status) { // nếu trong trạng thái cập nhật
      // Tìm vị trí của cái thằng đang chỉnh sửa
      let indexOfEdited = this.props.usersList.findIndex(user => {
       return user.Id === this.state.student.Id});
      // Tạo ra mảng mới không chứa thằng đang chỉnh sửa
      const cloneUsers = [...this.props.usersList];
      cloneUsers.splice(indexOfEdited, 1)
      // Tìm trong mảng đó xem có thằng nào trùng không
      index = cloneUsers.findIndex((user) => {
        return user[id] === data;
      });
    }
    if (index === -1 || message === "") {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: "",
        },
      });
    } else {
      result = false
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: message + " đã được sử dụng",
        },
      });
    }
    return result;
  };
  validIsAccept = (data, id) => {
    let message = "";
    let patten = "";
    let result = true;
    switch (id) {
      case "userId": {
        message = "ID";
        patten = /^([0-9]){4}$/;
        break;
      }
      case "phoneNumber": {
        patten = /^([0-9]){10}$/;
        message = "Số điện thoại";
        break;
      }
      case "fullName": {
        message = "Họ và tên";
        patten =
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
        break;
      }
      default: {
        message = "Email";
        patten = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        break;
      }
    }
    if (!patten.test(data.trim())) {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: message + " không hợp lệ",
        },
      });
      result = false;
    }
    if (result) {
      this.setState({
        errMessenger: {
          ...this.state.errMessenger,
          [id]: "",
        },
      });
    }
    return result;
  };
  validDataInput = (e) => {
    let { id, value } = e.target;
      this.validIsEmpty(value, id) &&
      this.validIsAccept(value, id) &&
      this.validIsRepeat(value, id);
  };
  render() {
    const student = this.state.student;
    return (
      <div className="container">
        <div className="card px-3 pb-2 mb-4">
          <h3 className="card-header bg-dark text-white mb-2">
            Thông tin sinh viên
          </h3>
          <div className="row">
            <div className="col-6">
              <label htmlFor="userId">Mã sinh viên</label>
              {this.state.errMessenger.userId && (
                <span className="ms-3 text-danger">
                  *{this.state.errMessenger.userId}
                </span>
              )}
              <input
                type="text"
                id="userId"
                placeholder="Mã sinh viên"
                className="form-control"
                onChange={this.handleChangeData}
                onBlur={this.validDataInput}
                value={student.userId}
              />
              <label htmlFor="phoneNumber">Số điện thoại</label>
              {this.state.errMessenger.phoneNumber && (
                <span className="ms-3 text-danger">
                  *{this.state.errMessenger.phoneNumber}
                </span>
              )}
              <input
                type="text"
                id="phoneNumber"
                placeholder="087xxxx..."
                className="form-control"
                onChange={this.handleChangeData}
                onBlur={this.validDataInput}
                value={student.phoneNumber}
              />
            </div>
            <div className="col-6">
              <label htmlFor="fullName">Họ và tên</label>
              {this.state.errMessenger.fullName && (
                <span className="ms-3 text-danger">
                  *{this.state.errMessenger.fullName}
                </span>
              )}
              <input
                type="text"
                id="fullName"
                placeholder="Nguyễn Tấn D"
                className="form-control"
                onChange={this.handleChangeData}
                onBlur={this.validDataInput}
                value={student.fullName}
              />
              <label htmlFor="emailAdress">Email</label>
              {this.state.errMessenger.emailAdress && (
                <span className="ms-3 text-danger">
                  *{this.state.errMessenger.emailAdress}
                </span>
              )}
              <input
                type="email"
                id="emailAdress"
                placeholder="phongkhampk@gmail.com"
                className="form-control"
                onChange={this.handleChangeData}
                onBlur={this.validDataInput}
                value={student.emailAdress}
              />
            </div>
          </div>
          <div className="mt-3">
            <button
              className="btn btn-success"
              onClick={() => this.handleAddStudent(this.state.student)}
            >
              {!this.state.student.Id ? "Thêm sinh viên" : "Cập nhật"}
            </button>
            {this.state.student.Id && (
              <button
                className="btn btn-danger ms-2"
                onClick={this.handleCancelUpdate}
              >
                Huỷ bỏ
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  componentDidUpdate = (prevProps) => {
    // Nếu như cái props selectedStudent có giá trị (khác null) && props cũ selectedStudent != props mới selectedStudent => set lại state
    if (
      this.props.selectedStudent &&
      prevProps.selectedStudent !== this.props.selectedStudent
    ) {
      this.setState({
        student: {
          ...this.props.student,
          ...this.props.selectedStudent,
        },
      });
    }
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // handleSentData : (dataUser)=> dispatch({
    //   type: "user/SEND_DATA",
    //   payload: dataUser
    // })
  };
};
const mapStateToProps = (state) => {
  return {
    usersList: state.userReducer.userList,
    selectedStudent: state.userReducer.selectedStudent,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
