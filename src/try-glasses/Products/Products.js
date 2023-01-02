import { Component } from "react";
import css from "./Products.module.css";

class Products extends Component {
  // id: 1,
  // price: 30,
  // name: "GUCCI G8850U",
  // url: "./glassesImage/v1.png",
  // desc: "Light pink square lense
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    imgSource: "",
    glassName: "",
    glassDesc: "",
    show: "d-none",
  };
  tryThisGlass(index) {
    if (index === "remove") {
      this.setState({
        imgSource: "",
        glassName: "",
        glassDesc: "",
        show: "d-none",
      });
      return;
    }
    let loc = this.glasses[index];
    this.setState({
      imgSource: loc.url,
      glassName: loc.name,
      glassDesc: loc.desc,
      show: "d-block",
    });
    // return src
  }
  renderProducts() {
    let html = this.glasses.map((currValue, index) => {
      return (
        <div className="col-2 text-center py-2" key={currValue.id}>
          <img
            onClick={() => {
              this.tryThisGlass(index);
            }}
            className={`${css.single_item} w-100 p-2`}
            src={currValue.url}
            alt={currValue.id}
          />
        </div>
      );
    });
    return html;
  }
  render() {
    return (
      <section className={`container pt-5 ${css.product}`}>
        <div className="try mb-4">
          <div className="row justify-content-evenly">
            <div className={`${css.product_des} col-3 px-0`}>
              <img
                src="./glassesImage/model.jpg"
                alt="model.jpg"
                className="img-fluid"
              />
              <div className={`${css.description} ${this.state.show}`}>
                <p className="mb-1 text-primary fw-bold">
                  {this.state.glassName}
                </p>
                <p className="text-white">{this.state.glassDesc}</p>
              </div>
              <img
                className={`${css.testProduct}`}
                src={this.state.imgSource}
                alt=""
              />
            </div>
            <div className={`${css.product_des} product-tried col-3 px-0`}>
              <img
                src="./glassesImage/model.jpg"
                alt="model.jpg"
                className="img-fluid"
              />
              <img
                className={`${css.testProduct}`}
                src={this.state.imgSource}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row">
          {this.renderProducts()}
          <div className="col-2 text-center py-2 d-flex justify-content-center">
            <button
              onClick={() => {
                this.tryThisGlass("remove");
              }}
              className="btn btn-success px-3 my-2 mx-2 rounded-3"
            >
              Tháo kính
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default Products;
