// Receipts Component

import React from 'react'
import axios from "axios";
import Reciept from './Reciept';

class Reciepts extends React.Component {
    constructor() {
        super();
        this.state = {orderData: [],mealData: []};
    }
  
    componentDidMount() {
      this._getReceiptOrderData();
    }
  
    _getReceiptOrderData() {
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
        })
    }
  
  
    render() {
      return (
        <div className="col d-none cartContainer" id="receiptsContainer">
        <div className="row cartContent">
            <div className="col-12 d-none d-lg-block cartHeadColumn">
                <p className="text-left cartAmountTxt">Availible Orders</p>
            </div>
            {/*Receipt*/}
            {this.__showReceipts()}
            {/*/Receipt*/}
            <div className="col">
                <p className="text-left cartAmountTxt">Completed Orders</p>
            </div>
            {/*Receipt*/}
            {this.__showReceiptsNoQR()}
            {/*/Receipt*/}
            <div className="col">
                <div className="heightStopper"></div>
            </div>
        </div>
    </div>  
      );
    }
  
    __showReceipts() {
      if (this.state.orderData.length > 0) {
        return this.state.orderData.map(order => {
          if(order.order_status == 0 && order.user_id == sessionStorage.getItem('userId')){
            return (
              <Reciept
                key={order._id}
                id={order._id}
                orderNumber={order.order_number}
                user={order.user_name}
                meals={order.meal_id}
                status={order.order_status}
                dateTime={order.created_at}
              />
            );
          };
        });
      } else {
        return null;
      }
    }

    __showReceiptsNoQR() {
        if (this.state.orderData.length > 0) {
          return this.state.orderData.map(order => {
            if(order.order_status != 0 && order.user_id == sessionStorage.getItem('userId')){
                console.log(order.created_at)
              return (
                <Reciept
                  key={order._id}
                  id={order._id}
                  orderNumber={order.order_number}
                  user={order.user_name}
                  meals={order.meal_id}
                  status={order.order_status}
                  dateTime={order.created_at}
                />
              );
            };
          });
        } else {
          return null;
        }
      }

  }
  
  export default Reciepts