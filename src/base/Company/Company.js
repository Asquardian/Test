import React from "react";
import "./company.css";
import Progress from "../UI/Progress/main";
import HideArrow from "../UI/HideArrow/main";
import DeliveryAdd from "../DeliveryAdd/DeliveryAdd";

class Company extends React.Component {
  setColor(progress) {
    progress = Number(progress);
    if (progress > 50) {
      return "green";
    } else if (progress !== 0) {
      return "yellow";
    }
    return "";
  }

  state = { compnay_class: "" };

  toggle(statement) {
    console.log(statement);
    if (statement) {
      this.setState({ compnay_class: "active" });
      return true;
    }
    this.setState({ compnay_class: "" });
    return false;
  }

  render() {
    return (
      <div className="company">
        <div className="company_row">
          <div className="company_label">
            <HideArrow handleEvent={(e) => this.toggle(e)} />
            <img
              className="company_img"
              src={this.props.data.img}
              alt={this.props.data.name}
            />
          </div>
          <div className="company_info">
            <p className="company_name">{this.props.data.name}</p>
            <p className="company_city">{this.props.data.city}</p>
          </div>
          <div className="company_item price">
            {Number(this.props.data.price).toLocaleString("ru-RU")}
          </div>
          <div
            className={
              this.setColor(this.props.data.shipping) + " company_item shipping"
            }
          >
            <div className="price">
              {Number(this.props.data.shipping).toLocaleString("ru-RU")}
            </div>
          </div>
          <div
            className={
              this.setColor(this.props.data.remain) + " company_item shipping"
            }
          >
            <div className="price">
              {Number(this.props.data.remain).toLocaleString("ru-RU")}
            </div>
          </div>
          <div className="company_item">{this.props.data.progress} %</div>
          <div
            className="company_item"
            style={{ paddingRight: "30px", height: "10px" }}
          >
            <Progress value="{this.props.data.progress}" />
          </div>
        </div>
        <div className={"company_more " + this.state.compnay_class}>
          {this.props.children}
          <DeliveryAdd product={this.props.product}></DeliveryAdd>
        </div>
      </div>
    );
  }
}

export default Company;
