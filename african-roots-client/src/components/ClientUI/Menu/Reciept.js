// Receipt Item Component

import React from 'react'
import RecieptMenuItem from './RecieptMenuItem';
import axios from "axios";
import RecieptQRRow from './RecieptQRRow';
import { throws } from 'assert';
import RecieptThumbnailItem from './receiptThumbnailItem';

class Reciept extends React.Component {
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

    _findTotal(){
        let mealTotal = 0;
        let mealData = this._searchMeals(this.props.meals,this.state.mealData);

        for (var i=0; i < mealData.length; i++) {
            mealTotal = mealTotal + mealData[i].price_id
        } 

        return mealTotal;
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
        <div className="col-12">
        <div className="row receiptBody">
            <div className="col-12">
                <div><a className="btn btn-light d-lg-flex align-items-lg-center collapseHead" data-toggle="collapse" aria-expanded="false" role="button" href={'#a' + this.props.orderNumber} >
                {this._showMenuItemThumbnail()}
                <i className="la la-angle-down d-lg-flex ml-auto"></i></a>
                    <div className="collapse receiptsCard" id={'a' + this.props.orderNumber}>
                        <div className="row">
                            <div className="col-12 d-inline-flex">
                                <p className="receiptTimestamp">{/*Order Timestamp(Date)*/}{this.props.dateTime.slice(0, 10)}</p>
                                <p className="d-xl-flex ml-auto receiptTimestamp">{/*Order Timestamp(Day)*/}{this.props.dateTime.slice(11, 16)}</p>
                            </div>
                        </div>
                        <div className="row">
                            {/*Menu Item*/}
                            {this.__showMenuItem()}
                            {/*/Menu Item*/}

                            <div className="col-12 d-inline-flex totalReceiptCol">
                                <p className="FoodNameLabelReceipt">Total</p>
                                <p className="d-xl-flex ml-auto FoodPriceLabelReceipt">{/*Order Total*/}R {this._findTotal()}.00</p>
                            </div>
                        </div>

                        {/*QR Row*/}
                        {this.__showQR()}
                        {/*/QR Row*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }

    _showMenuItemThumbnail() {
        let count = 0;
        let meals = this._searchMeals(this.props.meals,this.state.mealData);
        if (meals.length > 0) {
            return meals.map(meal => {
                count = count + 1;
                if(count < 7){
                    return (
                        <RecieptThumbnailItem
                        key={Math.random()}
                        image={meal.image}
                        />
                    );
                }    
            });   
        } else {
        return null;
        }
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

    __showQR() {
        if (this.props.status == 0) {
            return (
                <RecieptQRRow key={this.props.user} orderNumber={this.props.orderNumber}/>
            );
        } else {
        return null;
        }
    }
}

export default Reciept