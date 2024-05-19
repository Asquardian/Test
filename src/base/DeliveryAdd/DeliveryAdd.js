import React from "react";
import "./delivery_add.css";
import NumberSelect from "../UI/NumberSelect/NumberSelect";
import DeliverySave from "../DeliverySave/DeliverySave";

class CompanyDetail extends React.Component {
  render() {
    return (
      <form className="delivery_form">
        <h1>Доставка поставщика offine</h1>
        <div className="form_container">
          <div className="input_container">
            <label htmlFor="status">Статус</label>
            <select className="input" id="status" name="status">
              <option>Деловые линии</option>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
            </select>
          </div>

          <div className="input_container">
            <label htmlFor="date">Дата отгрузки</label>
            <input type="date" className="input" />
          </div>

          <div className="input_container">
            <label>Длина</label>
            <NumberSelect value={["mm", "cm", "m", "km"]}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Высота</label>
            <NumberSelect value={["mm", "cm", "m", "km"]}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Ширина</label>
            <NumberSelect value={["mm", "cm", "m", "km"]}></NumberSelect>
          </div>

          <div className="input_container">
            <label>Количество мест</label>
            <input className="input" min="0" type="number" name="sit" />
          </div>

          <div className="input_container">
            <label>Вес</label>
            <NumberSelect value={["g", "kg"]}></NumberSelect>
          </div>

          <div className="input_container span-2">
            <label htmlFor="status">Условия</label>
            <select className="input" id="status" name="status">
              <option>Деловые линии</option>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
            </select>
          </div>

          <div className="input_container">
            <label>Цена</label>
            <NumberSelect value={["₽, руб", "$, дол"]}></NumberSelect>
          </div>

          <div className="input_container">
            <label htmlFor="status">Траснпортная компания</label>
            <select className="input" id="status" name="status">
              <option>Деловые линии</option>
              <option>Деловые линии</option>
              <option>Деловые линии</option>
            </select>
          </div>

          <div className="input_container span-3">
            <label htmlFor="status">URL</label>
            <input className="input" min="0" type="number" name="sit" />
          </div>

          <div className="input_container">
            <label htmlFor="status">Номер отслеживания</label>

            <input className="input" min="0" type="number" name="sit" />
          </div>
        </div>
          <DeliverySave product={this.props.product}></DeliverySave>
      </form>
    );
  }
}

export default CompanyDetail;
