//List Item for Paid Column In Order List

import React from 'react'
import axios from "axios";
import RecieptMenuItem from '../../ClientUI/Menu/RecieptMenuItem';

class OrderListItem extends React.Component {
    constructor() {
      super();
      this.state = {orderData: [],mealData: []};
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
                key={Math.random()}
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

export default OrderListItem