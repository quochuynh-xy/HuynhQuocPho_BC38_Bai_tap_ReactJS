import { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";
class ProductList extends Component {
  products = this.props.productsData;
  renderItem = () => {
    let html = this.products.map((product) => {
      return (
        <ProductItem
          product={product}
          key={product.id}
          showProductInfo={this.props.showProductInfo}
          handleAddtoCart={this.props.handleAddtoCart}
        />
      );
    });
    return html;
  };
  render() {
    return (
      <section className="container">
        <div className="row">
          {this.renderItem()}
          {/* <ProductItem product={product} key={product.id} />
          <ProductItem product={product} key={product.id} />
          <ProductItem product={product} key={product.id} /> */}
        </div>
      </section>
    );
  }
}
export default ProductList;
