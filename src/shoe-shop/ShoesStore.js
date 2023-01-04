import React, { Component } from "react";
// import ProductItem from "./ProductItem/ProductItem";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import ProductDetails from "./ProductDetails/ProductDetails";
class ShoesStore extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 5,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    singleProductInfo: "",
    cart: [],
  };
  // Hiển thị thông tin sản phẩm
  showProductInfo = (info) => {
    this.setState(
      {
        singleProductInfo: info,
      },
      () => {
        // console.log(this.state.singleProductInfo);
      }
    );
  };
  // Thêm sản phẩm vào giỏ hàng
  handleAddtoCart = (item) => {
    let cloneCart = [...this.state.cart];
    let cartItem = {}; // {name, price, qty, buyQty..}
    const cartIndex = this.state.cart.findIndex((data) => {
      return data.id === item.id;
    });
    if (cartIndex >= 0) {
      cloneCart[cartIndex].buyQuantity += 1;
    } else {
      cartItem = { ...item };
      cartItem.buyQuantity = 1;
      cloneCart.push(cartItem);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        // console.log(this.state.cart);
      }
    );
  };
  // Tăng số lượng sản phẩm
  handleIncreaseItem = (id) => {
    let cloneCart = [...this.state.cart];
    const indexInCart = cloneCart.findIndex((item) => {
      return item.id === id;
    });
    cloneCart[indexInCart].buyQuantity += 1;
    if (cloneCart[indexInCart].buyQuantity >= cloneCart[indexInCart].quantity) {
      alert("Max setting :)");
      cloneCart[indexInCart].buyQuantity = cloneCart[indexInCart].quantity;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  // Giảm số lượng sản phẩm
  handleDecreaseItem = (id) => {
    let cloneCart = [...this.state.cart];
    const indexInCart = cloneCart.findIndex((item) => {
      return item.id === id;
    });
    cloneCart[indexInCart].buyQuantity -= 1;
    if (cloneCart[indexInCart].buyQuantity <= 0) {
      let ask = window.confirm("Delete this item?");
      if (ask === true) {
        cloneCart.splice(indexInCart, 1);
      } else {
        cloneCart[indexInCart].buyQuantity = 1;
      }
    }
    this.setState({
      cart: cloneCart,
    });
  };
  // Xóa sản phẩm khỏi giỏ hàng
  handleRemoveItem = (id) => {
    let cloneCart = [...this.state.cart];
    const indexInCart = cloneCart.findIndex((item) => {
      return item.id === id;
    });
    cloneCart.splice(indexInCart, 1);
    this.setState({
      cart: cloneCart,
    });
  };
  // Tính tổng tiền
  calcTotalAmount = () => {
    let sum = 0;
    for (let item of this.state.cart) {
      sum += item.price * item.buyQuantity;
    }
    return sum;
  };
  // Checkout: xóa mảng giỏ hàng
  handleCheckOut = () => {
    if (this.state.cart[0]) {
      window.alert("Thank you! <3");
    }
    this.setState({
      cart: [],
    });
  };
  // Đếm số lượng sản phẩm
  countTotalItems = ()=> {
    return this.state.cart.reduce((initial, item)=>{
      return initial += item.buyQuantity
    }, 0)
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container py-3">
            <h3 className="text-success text-center">Shopping online</h3>
            <button
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
              className="btn btn-success text-warning fs-4 px-4"
            >
              Cart <span>{!this.countTotalItems() ? '': `(${this.countTotalItems()})`}</span>
            </button>
          </div>
        </header>
        <ProductList
          productsData={this.products}
          showProductInfo={this.showProductInfo}
          handleAddtoCart={this.handleAddtoCart}
        ></ProductList>
        <Cart
          cart={this.state.cart}
          handleIncreaseItem={this.handleIncreaseItem}
          handleDecreaseItem={this.handleDecreaseItem}
          handleRemoveItem={this.handleRemoveItem}
          totalCash={this.calcTotalAmount()}
          handleCheckOut={this.handleCheckOut}
        />
        <ProductDetails singleProductInfo={this.state.singleProductInfo} />
      </React.Fragment>
    );
  }
}
export default ShoesStore;
