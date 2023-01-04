import { Component } from "react";
class ProductItem extends Component {
  showProductInfo = this.props.showProductInfo;
  handleAddtoCart = this.props.handleAddtoCart;
  render() {
    let { image, name, price, shortDescription } = this.props.product;
    return (
      <div className="col-4 mb-4">
        <div className="card">
          <img src={image} className="card-img-top" alt={image} />
          <div className="card-body text-start">
            <h5 className="card-title" data-bs-toggle="theModal">
              {name}
            </h5>
            <h5 className="text-danger">Price: {price}$</h5>
            <p className="card-text text-secondary">{shortDescription}</p>
            <button className="btn btn-primary me-3"
              onClick={()=>{this.handleAddtoCart(this.props.product)}}
            >Add to carts</button>
            <button
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#itemDetailsModal"
              onClick={() => this.showProductInfo(this.props.product)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
