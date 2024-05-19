import "./delivery_save.css";
import React from "react";
import Product from '../Product/Product'

class DeliverySave extends React.Component {

  state = { product: [] };

  componentWillMount(){
    this.props.product.forEach(data => {
      this.setState( 
        { product: [...this.state.product, <Product data={data} key={data.id}/>] }
      );
    });
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
