import React from "react";
import NumberPicker from "../UI/NumberPicker/NumberPicker";

class Product extends React.Component {

  state = {inBalance: 0};
  changeNumber(event){
    this.setState({inBalance: event});
  }

  render() {
    return <div className="delivery_add">
        <div className="product">
            <img src={this.props.data.img} alt="" />
            {this.props.data.name}
            <NumberPicker step="1" key={0} onChange={(event) => this.changeNumber(event)} max={this.props.data.left}/>
            {this.props.data.left - this.state.inBalance + " "} 
            {this.props.data.price * this.state.inBalance + " "}
            {this.props.data.price * (this.props.data.left - this.state.inBalance)}
        </div>
    </div>;
  }
}

export default Product;
