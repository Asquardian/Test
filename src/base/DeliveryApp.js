import "./style.css";
import React from "react";
import GlobalError from "./ErrorStatement/GlobalError";
import Company from "./Company/Company";
import DeliveryStatus from "./DeliveryStatus/DeliveryStatus";

class DeliveryApp extends React.Component {
  state = { hasError: false, companies: [] };

  componentWillMount() {
    this.getData();
  }

  async getData() {
    try {
      const objects = (await import("./data.json")).default;
      this.setState(objects);
    } catch (error) {
      this.setState({
        hasError: true,
        text: "Ошибка загрузки",
        description: "Не удалось загрузить json файл",
      });
    }
  }

  makeCompany() {
    let companyList = [];
    for (let item of this.state.companies) {
      let deliveryList = [];
      for (let item_delivery of item.delivery) {
        deliveryList.push(
          <DeliveryStatus data={item_delivery} key={item_delivery.id} />
        );
      }
      companyList.push(<Company data={item.info} key={item.id} product={item.product}> 
        {deliveryList} 
      </Company>);
    }
    return companyList;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="delivery">
          <GlobalError text={this.state.text}>
            {this.state.description}
          </GlobalError>
        </div>
      );
    }
    return (
      <div className="delivery">
        <h1 className="head">Доставка поставщиков online</h1>
        <div className="company_header">
          <div className="item">Компания</div>
          <div className="item">Сумма заказа</div>
          <div className="item">Сумма отгрузки</div>
          <div className="item">Сумма остаток</div>
          <div className="item"></div>
          <div className="item">Выполнение</div>
        </div>
        <div className="company_list">{this.makeCompany()}</div>
      </div>
    );
  }
}

export default DeliveryApp;
