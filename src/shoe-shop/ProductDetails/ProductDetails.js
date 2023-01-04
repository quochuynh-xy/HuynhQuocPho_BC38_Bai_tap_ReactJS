import { Component } from "react";
class ProductDetails extends Component {
  render() {
    let {name, price, description, quantity, image} = this.props.singleProductInfo;
    return (
      <div
        className="modal fade"
        id="itemDetailsModal"
        tabIndex="{-1}"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Product Infomations
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start d-flex">
              <div className="w-50">
                <img
                  className="img-fluid"
                  src={image}
                  alt={name}
                />
              </div>
              <div className="w-50 ps-4">
                <h5>Product Name: {name}</h5>
                <h5>Price: {price}</h5>
                <p>
                  {description}
                </p>
                <p>Instock: {quantity}</p>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
