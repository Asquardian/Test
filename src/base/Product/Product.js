import React from "react";
import NumberPicker from "../UI/NumberPicker/NumberPicker";
import "./product.css";

class Product extends React.Component {
  state = {  inBalance: 0 };
  changeNumber(event) {
    this.setState({ inBalance: event });
    this.props.getData(this.props.value, event);
  }

  render() {
    return (
      <div className="delivery_add">
        <div className="product">
          <div className="item_main">
            <img src={this.props.value.img} alt="" />
            <div style={{marginLeft: "30px"}}> 
              <div className="item_name">{this.props.value.name}</div>
              <div className="item_name_type">{this.props.value.type}</div>
            </div>
          </div>
          <NumberPicker
            step="1"
            key={0}
            onChange={(event) => this.changeNumber(event)}
            max={this.props.value.left}
          />
          <div className="item_save">
            {this.props.value.left - this.state.inBalance}
          </div>
          <div className="item_save price">
            {this.props.value.price * this.state.inBalance}
          </div>
          <div className="item_save  price">
            {this.props.value.price *
              (this.props.value.left - this.state.inBalance)}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
