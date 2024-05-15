import React from "react";
import "./company.css";
import Arrow from "./arrow.svg";
import Progress from './../Progress/Progress';

class Company extends React.Component {

  setColor(progress){
    progress = Number(progress);
    if(progress > 50){
        return 'green';
    }
    else if(progress !== 0){
        return 'yellow';
    }
    return ''
  }

  constructor(props){
    super(props);
    this.state = {"showChildren": false};
  }

  render() {
    return (
      <div className="company_row">
        <div className="company_label">
          <button className={this.state.showChildren ? "company_button active" : "company_button"} aria-label="Открыть">
            <img src={Arrow} alt="Открыть" />
          </button>
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
        <div className="company_item price">{Number(this.props.data.price).toLocaleString('ru-RU')}</div>
        <div className={this.setColor(this.props.data.shipping) + " company_item shipping"}>
          <div className="price">{Number(this.props.data.shipping).toLocaleString('ru-RU')}</div>
        </div>
        <div className={this.setColor(this.props.data.remain) + " company_item shipping"}>
          <div className="price">{Number(this.props.data.remain).toLocaleString('ru-RU')}</div>
        </div>
        <div className="company_item">
            {this.props.data.progress} %
        </div>
        <div className="company_item" style={{paddingRight: '30px', height: '10px'}}>
            <Progress value="{this.props.data.progress}"/>
        </div>
      </div>
    );
  }
}

export default Company;