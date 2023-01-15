import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import SingleRow from "../SingleRow/SingleRow";
class SeatingChart extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className={`text-white fw-bolder text-center ${css.screen}`}>
          Màn hình
        </h3>
        {this.props.seats
        //   .filter((data) => data.hang != "")
          .map((row) => {
            return <SingleRow seats={row} key={row.hang} />;
          })}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seats: state.seatsReducer.seats,
  };
};
export default connect(mapStateToProps, null)(SeatingChart);
