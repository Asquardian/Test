import "./delivery.css"
import React from "react";

class DeliveryStatus extends React.Component {

    render(){
        return(
            <div className="delivery_row">
                <div className=""></div>
                <div className="delivery_status delivered">
                    Доставлен
                </div>
                <div className="delivery_date">
                    12.02.2023
                </div>
                <div className="delivery_tracking">
                    <div className="delivery_item_label">
                        Трекинг номер
                    </div>
                    <a className="delivery_item_value" href="34856387564">34856387564</a>
                </div>
                <div className="delivery_width">
                    <div className="delivery_item_label">
                        Габариты
                    </div>
                    <div className="delivery_item_value">90х90х90 mm</div>
                </div>
                <div className="delivery_weight">
                    <div className="delivery_item_label">
                    Общий вес
                    </div>
                    <div className="delivery_item_value">100 kg</div>
                </div>
                <div className="delivery_number_place">
                    <div className="delivery_item_label">
                    Кол-во мест
                    </div>
                    <div className="delivery_item_value">5</div>
                </div>
                <div className="delivery_status_paid">
                    <div className="delivery_item_label">
                    Оплата доставки
                    </div>
                    <div className="delivery_item_value">Оплачена</div>
                </div>
            </div>
        )
    }

}

export default DeliveryStatus;