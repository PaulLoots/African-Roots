//Tab For Viewing a List of Orders

import React from 'react'
import axios from "axios";
import OrderListItem from './OrderListItem';
import OrderListItemBtn from './OrderListItemBtn';
import OrderListItemDelete from './OrderListItemDelete';

class OrderListTab extends React.Component {
  constructor() {
      super();
      this.state = {orderData: [],mealData: []};
      this._getOrderData = this._getOrderData.bind(this);
  }

  componentDidMount() {
    this._getOrderData();
  }

  _getOrderData() {
    let url = 'https://dev-african-roots.herokuapp.com/api/orders';
    return axios(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        credentials: 'same-origin',
      }).then(response => {
        this.setState({
          orderData: response.data
        });
        console.log(this.state.orderData);
      })
  }


  render() {
    return (
    <div className="tab-pane" role="tabpanel" id="tab-2">
      <div className="row">
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Pending</h5>
              {/* Pending Order List Item */}
              {this.__showPendingOrders()}
              {/* /Pending Order List Item */}
          </div>
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Paid</h5>
              {/* Paid Order List Item */}
              {this.__showPaidOrders()}
              {/* /Paid Order List Item */}
          </div>
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Served</h5>
              {/* Served Order List Item */}
              {this.__showServedOrders()}
              {/* /Served Order List Item */}
          </div>
      </div>
    </div>
    );
  }

  __showPendingOrders() {
    if (this.state.orderData.length > 0) {
      return this.state.orderData.map(order => {
        if(order.order_status == 0){
          return (
            <OrderListItem
              key={order._id}
              orderNumber={order.order_number}
              user={order.user_name}
              meals={order.meal_id}
            />
          );
        };
      });
    } else {
      return null;
    }
  }

  __showPaidOrders() {
    if (this.state.orderData.length > 0) {
      return this.state.orderData.map(order => {
        if(order.order_status == 1){
          return (
            <OrderListItemBtn
              key={order._id}
              order_id={order._id}
              orderNumber={order.order_number}
              user={order.user_name}
              meals={order.meal_id}
              getOrderData={this._getOrderData}
            />
          );
        };
      });
    } else {
      return null;
    }
  }

  __showServedOrders() {
    if (this.state.orderData.length > 0) {
      return this.state.orderData.map(order => {
        if(order.order_status == 2){
          return (
            <OrderListItemDelete
              key={order._id}
              id={order._id}
              orderNumber={order.order_number}
              user={order.user_name}
              meals={order.meal_id}
              getOrderData={this._getOrderData}
            />
          );
        };
      });
    } else {
      return null;
    }
  }
}

export default OrderListTab