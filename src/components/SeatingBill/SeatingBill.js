import React, { Component } from "react";

import { connect } from "react-redux";
class SeatingBill extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h4 className="text-primary mt-5">Danh sách ghế ngồi</h4>
          <h5 className="text-white">
            <span className="px-3 me-3 rounded-2 bg-warning fw-bolder"></span>: Ghế đã được đặt.
          </h5>
          <h5 className="text-white">
            <span className="px-3 me-3 rounded-2 bg-light fw-bolder"></span>: Ghế trống.
          </h5>
          <h5 className="text-white">
            <span className="px-3 me-3 rounded-2 bg-success fw-bolder"></span>: Ghế đang
            chọn.
          </h5>
        </div>
        <div>
          <table className="table table-bordered fw-bold bg-light">
            <thead>
              <tr>
                <td>Số ghế</td>
                <td>Giá</td>
                <td className="text-center">Hủy</td>
              </tr>
            </thead>
            <tbody>
              {this.props.seatsList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td className="text-center">
                      <button className="bg-danger text-white rounded-3 border-0"
                        onClick={()=>this.props.handleRemove(item.soGhe)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>Tổng tiền</td>
                <td colSpan={2} className="text-danger">
                  {this.props.seatsList.reduce((init, item) => {
                    return (init += item.gia);
                  }, 0)} đ
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-end">
            <button className="btn btn-primary"> Check out</button>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatsList: state.paymentList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleRemove: (data) => dispatch({type: "bill/REMOVE_FROM_BILL", payload: data})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SeatingBill);
