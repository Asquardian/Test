import "./delivery.css";
import React from "react";
import HideArrow from "../UI/HideArrow/main";

class DeliveryStatus extends React.Component {
  toggle(statement) {
    alert("work in progress");
  }
  state = {additional_class: ""};

  static getDerivedStateFromProps(props, state) {
    if (props.data.status === "Доставлен") {
      state = { additional_class: "delivered" };
    } else {
      state = { additional_class: "" };
    }
    return state;
  }

  widthScale(value){
    let total = "";
    value.forEach((element, idx, array) => {
      total += element.number + element.select;
      if(idx < array.length - 1){
        total += " x ";
      }
    })
    return total;
  }

  width(value){
    let unit = "";
    let total = "";
    if(!value){
      return "Не указано"
    }
    value.forEach((element, idx, array) => {
      if(unit === ""){
        unit = element.select;
      }
      total += element.number;
      if(unit != element.select){
        return total = this.widthScale(value);
      }
      if(idx === array.length - 1){
        total += " " + element.select;
      }
      else{
        console.log(array.length);
        total += "x";
      }
    })
    return total;
  }

  render() {
    return (
      <div className="delivery_row">
        {this.props.key}
        <HideArrow handleEvent={(e) => this.toggle(e)} />
        <div className={"delivery_status " + this.state.additional_class}>
          {this.props.data.status}
        </div>
        <div className="delivery_date">{this.props.data.date}</div>
        <div className="delivery_tracking">
          <div className="delivery_item_label">Трекинг номер</div>
          <a className="delivery_item_value" href={this.props.data.url}>
          {this.props.data.tracking}
          </a>
        </div>
        <div className="delivery_width">
          <div className="delivery_item_label">Габариты</div>
          <div className="delivery_item_value">{this.width(this.props.data.width)}</div>
        </div>
        <div className="delivery_weight">
          <div className="delivery_item_label">Общий вес</div>
          <div className="delivery_item_value">{this.props.data.weight.number + " " + this.props.data.weight.select}</div>
        </div>
        <div className="delivery_number_place">
          <div className="delivery_item_label">Кол-во мест</div>
          <div className="delivery_item_value">{this.props.data.place}</div>
        </div>
        <div className="delivery_status_paid">
          <div className="delivery_item_label">Оплата доставки</div>
          <div className="delivery_item_value">Оплачена</div>
        </div>
      </div>
    );
  }
}

export default DeliveryStatus;
