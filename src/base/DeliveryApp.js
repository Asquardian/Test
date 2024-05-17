import "./style.css";
import React from "react";
import GlobalError from "./ErrorStatement/GlobalError";
import Company from "./Company/Company";
import DeliveryStatus from "./DeliveryStatus/DeliveryStatus";

class DeliveryApp extends React.Component {
  state = { hasError: false, companies: [] };

  componentDidMount() {
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
    console.log(typeof this.state.companies);
    for (let item of this.state.companies) {
      companyList.push(<Company data={item.info} key={item.id}>
          <DeliveryStatus data={item.delivery}  key={item.delivery_id}/> 
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
