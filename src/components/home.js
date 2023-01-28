import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./form";
import UserList from "./userList";
import { actionFetchData } from "../reducer/actions/actions";
class Home extends Component {
  fetchDataFromAPI = () => {
    axios({
      url: "https://638b06ad7220b45d22866946.mockapi.io/btbuoi_21/QuanLyNhanVien",
      method: "GET",
    })
      .then( res => res.data)
      .then (data => {
        this.props.dispatch(actionFetchData(data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container mt-3">
        <Form fetchDataFromAPI={this.fetchDataFromAPI}/>
        <UserList fetchDataFromAPI={this.fetchDataFromAPI}/>
      </div>
    );
  }
  componentDidMount() {
    this.fetchDataFromAPI();
  }
}

export default connect()(Home);
