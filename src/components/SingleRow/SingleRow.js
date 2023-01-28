import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import { actionAddToCart } from "../../redux/actions/actions";
class SingleRow extends Component {
  renderSeats = () => {
    if(!this.props.seats.hang) {
      // Hàng tọa độ 
      return (
        <div className={css.seats}>
        <span className={`fw-bold fs-5 ${css.coordinates}`}>
          {this.props.seats.hang}
        </span>
        {this.props.seats.danhSachGhe
        .map((seat) => {
          return (
            <span className={`${css.seat} ${css.coordinatesX} fw-bold fs-5`} key={seat.soGhe}>
              {seat.soGhe}
            </span>
          );
        })}
      </div>
      )
    } else {
      let selectingSeats = this.props.seatsList.map( item => item.soGhe)
      // Các hàng ghế ngồi
      return (
        <div className={css.seats}>
        <span className={`fw-bold fs-5 ${css.coordinates}`}>
          {this.props.seats.hang}
        </span>
        {this.props.seats.danhSachGhe
        .map((seat) => {
          let status = "seat"; // trạng thái ghế: seat: chưa đặt, takenSeat: đã đặt, selecting: đang lựa
          if(seat.daDat) {status = "takenSeat"}
          let index = selectingSeats.findIndex( item => {
            return seat.soGhe === item
          })
          if(seat.daDat === false && index !== -1 ) {status = "selecting"}
          return (
            <button className={`${css[status]}`} key={seat.soGhe}
              onClick={()=> this.props.handleSelect(seat)}
            >
              {seat.soGhe}
            </button>
          );
        })}
      </div>
      )
    }
  }
  render() {
    return (
      this.renderSeats()
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seatsList: state.paymentList
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (seatInfo)=>{dispatch(actionAddToCart(seatInfo))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleRow);
