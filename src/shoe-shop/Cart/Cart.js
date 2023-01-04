import { Component } from "react";
class Modal extends Component {
  renderCart =()=> {
    return this.props.cart.map((product, index) => {
      let {image, name, price, buyQuantity, id} = product;
      return (
          <tr key={id}>
          <td>{index+1}</td>
          <td>
            <img src={image} alt="Lorempic" style={{width:70}} />
            {/* <img src="https://picsum.photos/200" alt="cc"/> */}
          </td>
          <td>{name}</td>
          <td>
            <button className="btn btn-secondary" 
              onClick={()=>this.props.handleDecreaseItem(id)}
            >-</button>
            <span className="mx-3 fw-bold">{buyQuantity}</span>
            <button className="btn btn-primary"
              onClick={()=>{this.props.handleIncreaseItem(id)}}
            >+</button>
          </td>
          <td>{price}$</td>
          <td className="fw-bolder">{price * buyQuantity}$</td>
          <td>
            <button className="btn btn-danger" onClick={()=>this.props.handleRemoveItem(id)}>Remove</button>
          </td>
        </tr>
        )
    })
  }
  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                My cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-center">
              <table className="table">
                <thead>
                  <tr>
                    <td>Item</td>
                    <td>Image</td>
                    <td>Product name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Cash</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody >
                  {this.renderCart()[0] ? this.renderCart() : <tr><td className="text-warning fs-3 border-0">Cart is empty</td></tr>}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <h3 className="me-auto">Total: <span className="ms-3 text-success">{this.props.totalCash}$</span></h3>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=> this.props.handleCheckOut()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
