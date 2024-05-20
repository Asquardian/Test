import React from "react";
import "./delivery_add.css";
import NumberSelect from "../UI/NumberSelect/NumberSelect";
import DeliverySave from "../DeliverySave/DeliverySave";

class CompanyDetail extends React.Component {
  state = {product: [], values: {
    status: "В пути", 
    agree: "Деловые линии", 
    company: "Деловые линии", 
    date: "",
    weight: {
      number: 0,
      select: "g"
    },
    price: {
      number: 0,
      select: "₽, руб"
    },
    len: {
      number: 0,
      select: "mm"
    },
    height: {
      number: 0,
      select: "mm"
    },
    width: {
      number: 0,
      select: "mm"
    },
    url: "",
    place: "",
    tracking: "",
    company: ""
  }
}
  async getData(value){
    await this.setState({product: value});
  }

  async handleCustomChange (e, name){
    await this.setState({
      ...this.state,
      values: 
      {
        ...this.state.values,
        [name]: {
          number: e.number,
          select: e.select,
        }
      }
    });
    this.props.onChange(this.state);
  }

  async handleInputChange (e) {
    const { name, value } = e.target;

    await this.setState({
      ...this.state,
      values: 
      {
        ...this.state.values,
        [name]: value
      }
    });
    this.props.onChange(this.state);
  };

  componentDidMount(){
    this.props.onChange(this.state);
  }
  render() {
    return (
      <form className="delivery_form">
        <h1>Доставка поставщика offine</h1>
        <div className="form_container">
          <div className="input_container">
            <label htmlFor="status">Статус</label>
            <select className="input" id="status" value={this.state.values.status} name="status"
            onChange={(event) => this.handleInputChange(event)}>
              <option>Доставлен</option>
              <option>В пути</option>
            </select>
          </div>

          <div className="input_container">
            <label htmlFor="date">Дата отгрузки</label>
            <input type="date" className="input" value={this.state.values.date}  name="date"
            onChange={(event) => this.handleInputChange(event)}/>
          </div>

          <div className="input_container">
            <label>Длина</label>
            <NumberSelect name="len" value={["mm", "cm", "m", "km"]} onChange={(event, name) => this.handleCustomChange(event, name)}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Высота</label>
            <NumberSelect value={["mm", "cm", "m", "km"]} name="height" onChange={(event, name) => this.handleCustomChange(event, name)}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Ширина</label>
            <NumberSelect value={["mm", "cm", "m", "km"]} name="width" onChange={(event, name) => this.handleCustomChange(event, name)}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Количество мест</label>
            <input className="input" min="0" type="number" name="sit" onChange={(event) => this.handleInputChange(event)}/>
          </div>

          <div className="input_container">
            <label>Вес</label>
            <NumberSelect value={["g", "kg"]} name="weight" onChange={(event, name) => this.handleCustomChange(event, name)}></NumberSelect>
          </div>

          <div className="input_container span-2">
            <label htmlFor="agree">Условия</label>
            <select className="input" id="agree" name="agree" onChange={(event) => this.handleInputChange(event)}>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
            </select>
          </div>

          <div className="input_container">
            <label>Цена</label>
            <NumberSelect value={["₽, руб", "$, дол"]} name="price" onChange={(event, name) => this.handleCustomChange(event, name)}></NumberSelect>
          </div>

          <div className="input_container">
            <label htmlFor="company">Траснпортная компания</label>
            <select className="input" id="company" name="company" onChange={(event) => this.handleInputChange(event)}>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
            </select>
          </div>

          <div className="input_container span-3">
            <label htmlFor="status">URL</label>
            <input className="input" min="0" type="text" name="url" onChange={(event) => this.handleInputChange(event)}/>
          </div>

          <div className="input_container">
            <label htmlFor="status">Номер отслеживания</label>

            <input className="input" min="0" type="number" name="tracking" onChange={(event) => this.handleInputChange(event)}/>
          </div>
        </div>
          <DeliverySave product={this.props.product} getData={(value) => this.getData(value)}></DeliverySave>
      </form>
    );
  }
}

export default CompanyDetail;
