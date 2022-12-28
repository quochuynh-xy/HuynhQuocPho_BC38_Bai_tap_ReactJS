import {Component} from "react";
import css from "../try-glasses/Model.module.css";
class Model extends Component {
render(){
    return(
        <div className="try mb-4">
            <div className="row justify-content-evenly">
                <div className={`${css.product_des} col-3 px-0`}>
                    <img src="./glassesImage/model.jpg" alt="model.jpg" className="img-fluid" />
                    <div className={css.description}>
                        <p className="mb-1 text-primary fw-bold">Tên Sản phẩm</p>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quas!</p>
                    </div>
                    <img className={`${css.testProduct}`} src="./glassesImage/v1.png" alt="" />
                </div>
                <div className={`${css.product_des} product-tried col-3 px-0`}>
                    <img src="./glassesImage/model.jpg" alt="model.jpg" className="img-fluid" />
                    <img className={`${css.testProduct}`} src="./glassesImage/v1.png" alt="" />
                </div>
            </div>
        </div>
    )
}
};
export default Model