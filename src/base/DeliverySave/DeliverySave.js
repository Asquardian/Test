import "./delivery_save.css";
import React from "react";
import Product from "../Product/Product";

class DeliverySave extends React.Component {
  state = { product: [], data: {}};

  async getItem(value, balance, id) {
    this.state.data[id] = {
      inBalance: balance,
      price: value.price,
      left: value.left
    };
    this.props.getData(this.state.data);
  }

  async componentWillMount() {
    await this.props.product.forEach((data) => {
      this.setState((prevState) => ({
        product: [
          ...prevState.product,
          <Product
            value={data}
            name={data.id}
            key={data.id}
            getData={(value, balance) =>
              this.getItem(value, balance, data.id)
            }
          />,
        ],
        data: {
          ...prevState.data,
          [data.id]: {
            inBalance: 0,
            price: data.price,
            left: data.left,
          }
        }
      }));
    });
    this.props.getData(this.state.data);
  }

  render() {
    return (
      <div className="delivery_add">
        <div className="company_header delivery_grid">
          <div className="item_delivery_add">Наименование</div>
          <div className="item_delivery_add">Отгрузка шт</div>
          <div className="item_delivery_add">Остаток шт</div>
          <div className="item_delivery_add">Сумма отгрузки</div>
          <div className="item_delivery_add">Сумма остаток</div>
        </div>
        {this.state.product}
      </div>
    );
  }
}

export default DeliverySave;
