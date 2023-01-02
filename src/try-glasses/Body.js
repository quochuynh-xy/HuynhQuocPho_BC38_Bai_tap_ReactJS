import { Component } from "react";
import Header from "./Header/Header";
// import Model from "./Model";
import Products from "./Products/Products";

class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products/>
      </div>
    );
  }
}
export default Body;
