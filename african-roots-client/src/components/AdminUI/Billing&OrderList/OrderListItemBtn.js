//List Item for Paid Column In Order List

import React from 'react'
import axios from "axios";
import RecieptMenuItem from '../../ClientUI/Menu/RecieptMenuItem';

class OrderListItemBtn extends React.Component {
    constructor() {
      super();
      this.state = {orderData: [],mealData: []};
      this._handleClick = this._handleClick.bind(this);
    }

    componentDidMount() {
        this._getMealData();
      }

    _getMealData() {
        let url = 'https://dev-african-roots.herokuapp.com/api/meals';
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
              mealData: response.data
            });
          })
      }

      _handleClick(){
        let data = {order_status:2}
        this._putOrder(data);
        console.log(data);
      };

      _putOrder(data) {
        axios({
            method: 'put',
            url: 'https://dev-african-roots.herokuapp.com/api/orders/'+this.props.order_id,
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                console.log("Yay!")
                console.log(response);
                //handle success
               this.props.getOrderData();
            })
            .catch(function (response) {
                //handle error
                console.log("awww!")
                console.log(response);
            });
      }

    _searchMeals(mealID, mealData){
        let meals= [];
        for (var i=0; i < mealData.length; i++) {
            if (Array.isArray(mealID)) {
                for (var j=0; j < mealID.length; j++) {
                    if (mealData[i]._id === mealID[j]) {
                        meals.push(mealData[i])
                    }
                }
            }
            else if (mealData[i]._id === mealID) {
                meals.push(mealData[i])
            } 
        }

        return meals;
      }
  

    render() {
      return (
        <div className="row OrderListRow">
            <div className="col receiptsCard">
                <div className="row">
                    <div className="col-6 d-inline-flex">
                        <p>{this.props.user}</p>
                    </div>
                    <div className="col-6 d-inline-flex">
                        <p className="d-xl-flex ml-auto receiptTimestamp">Order No.</p>
                        <p className="d-xl-flex ml-auto FoodPriceLabelReceipt">{this.props.orderNumber}</p>
                    </div>
                    <div className="col">
                        <div className="cartItemDevider"></div>
                    </div>
                    {/* Order List Menu Item */}
                    {this.__showMenuItem()}
                    {/* /Order List Menu Item */}
                </div>

                <div className="row">
                    <div className="col-6 col-lg-8 col-xl-6 ml-auto"><button className="btn btn-dark btn-lg btnServeOrder" type="button" onClick={this._handleClick}>Serve Order</button></div>
                </div>
            </div>
        </div>

        );
    }

    __showMenuItem() {
        let meals = this._searchMeals(this.props.meals,this.state.mealData);
        if (meals.length > 0) {
        return meals.map(meal => {
            return (
                <RecieptMenuItem
                key={meal._id}
                name={meal.name}
                price={meal.price_id}
                />
            );
        });
        } else {
        return null;
        }
    }
}

export default OrderListItemBtn