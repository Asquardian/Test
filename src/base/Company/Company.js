import React from "react";
import "./company.css";
import ReactDOM from "react-dom";
import Progress from "../UI/Progress/main";
import HideArrow from "../UI/HideArrow/main";
import DeliveryAdd from "../DeliveryAdd/DeliveryAdd";
import DeliveryStatus from "../DeliveryStatus/DeliveryStatus";



class Company extends React.Component {

  setColor(progress) { //Добавление CSS класса к доставке
    progress = Number(progress);
    if (progress > 50) { 
      return "green";
    } else if (progress !== 0) {
      return "yellow";
    }
    return "";
  }

  delete = () => { // Удалить поставщика
    this.setState({ show: false });
  };

  state = { compnay_class: "", changed: {}, saved: [], show: true };

  toggle(statement) { //Скрыть / Показать больше
    console.log(statement);
    if (statement) {
      this.setState({ compnay_class: "active" });
      return true;
    }
    this.setState({ compnay_class: "" });
    return false;
  }

  getData(e) { //Получение данных из формы
    let object = { // Приведение данных к виду компонента
      status: e.values.status,
      date: e.values.date,
      tracking: e.values.tracking,
      place: e.values.sit,
      width: [
        {
          number: e.values.len.number,
          select: e.values.len.select,
        },
        {
          number: e.values.width.number,
          select: e.values.width.select,
        },
        {
          number: e.values.height.number,
          select: e.values.height.select,
        },
      ],
      weight: {
        number: e.values.weight.number,
        select: e.values.weight.select,
      },
      price: { number: e.values.price.number, select: e.values.price.select },
      status_paid: "Оплачена",
      tracking: e.values.tracking,
      url: e.values.url,
    };
    this.state.changed = object;
  }

  saveData() { //Добавить компонент
    this.setState((prevState) => ({
      saved: [...prevState.saved, <DeliveryStatus data={this.state.changed} />],
    }));
  }

  render() {
    if (this.state.show) {
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
                this.setColor(this.props.data.shipping) +
                " company_item shipping"
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
            {this.state.saved}
            <DeliveryAdd
              product={this.props.product}
              onChange={(e) => this.getData(e)}
            ></DeliveryAdd>
            <div className="button_container">
              <button className="save" onClick={() => this.saveData()}>
                Сохранить
              </button>
              <button className="delete" onClick={() => this.delete()}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return(<h1>Удален</h1>);
    }
  }
}

export default Company;
