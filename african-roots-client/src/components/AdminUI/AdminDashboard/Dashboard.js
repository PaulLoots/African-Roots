//Component for Admin Dashboard

import React from 'react'
import ProfitsChart from './profits';
import OrdersChart from './orders';
import CustomersChart from './customers';
import SalesChart from './sales';
import axios from "axios";
import SeasonalFoods from './SeasonalFoods';
// import './data.js'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            orderData: [],
            mealData: [],
            salesChartData: {},
            profitsChartData: {},
            customerChartData: {}
        };
    }

    componentWillMount() {
        this._getOrderData();
        this._getMealData();
        this._getSalesChartData();
        this._getProfitsChartData();
        this._getCustomerChartData();
        // this._getCustomerCount();
        // this._getOrderCount();
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
        })
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

      _generateOrderChartData(orderData,mealData){
        
        let breakfast = this._getOrderChartCatagoryAmount(orderData,mealData,"Breakfasts");
        let lightMeal = this._getOrderChartCatagoryAmount(orderData,mealData,"Light meals");
        let drink = this._getOrderChartCatagoryAmount(orderData,mealData,"Drinks");
        let dessert = this._getOrderChartCatagoryAmount(orderData,mealData,"Desserts");

        return {label:["Beakfasts", "Light Meals", "Drinks", "Desserts"], 
                amount: [breakfast.amount,lightMeal.amount,drink.amount,dessert.amount],
                price: [breakfast.price,lightMeal.price,drink.price,dessert.price], 
                colour:['#D1E902','#B4CF23','#D6D6D6','#F5F5F5']}


    };

    // _getCustomerCount(orderData) {

    //     let current = null;
    //     let count = 0;

    //     for (var i=0; i < orderData.length; i++) {
    //         if (Array.isArray(orderData[i].user_id)) {
    //             if (orderData[i].user_id != current) {
    //                 if (count > 0) {
    //                     document.write(current + ' comes --> ' + count + ' times<br>');
    //                 }
    //                 current = orderData[i];
    //                 count = 1;
    //             } else {
    //                 count++;
    //             }
    //         }
    //     }
    //     if (count > 0) {
    //         document.write(current + ' comes --> ' + count + ' times');
    //     }
    // }

    // _getOrderCount(orderData) {

    //     let current = null;
    //     let count = 0;

    //     for (var i=0; i < orderData.length; i++) {
    //         if (Array.isArray(orderData[i].created_at)) {
    //             if (orderData[i].created_at != current) {
    //                 if (count > 0) {
    //                     document.write(current + ' comes --> ' + count + ' times<br>');
    //                 }
    //                 current = orderData[i].created_at;
    //                 count = 1;
    //             } else {
    //                 count++;
    //             }
    //         }
    //     }
    //     if (count > 0) {
    //         document.write(current + ' comes --> ' + count + ' times');
    //     }
    // }

    _getOrderChartCatagoryAmount(orderData,mealData,key){

        let data= {amount:0,price:0};

        for (var i=0; i < orderData.length; i++) {
            if (Array.isArray(orderData[i].meal_id)) {
                for (var j=0; j < orderData[i].meal_id.length; j++) {
                    for (var k=0; k < mealData.length; k++) {
                        if (mealData[k]._id === orderData[i].meal_id[j]) {
                            if (mealData[k].category === key) {
                                data.amount = data.amount + 1;
                                data.price = data.price + mealData[k].price_id;
                            }
                        }
                    }
                }
            }
            else {
                for (var k=0; k < mealData.length; k++) {
                    if (mealData[k]._id === orderData[i].meal_id) {
                        if (mealData[k].category === key) {
                            data.amount = data.amount + 1;
                            data.price = data.price + mealData[k].price_id;
                        }
                    }
                }
            }

        }

        return data;
    }

    _getSalesChartData() {
        //AJAX CALL
        this.setState({
            salesChartData: {
                labels: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                    'Saturday', 'Sunday'
                ],
                datasets : [
                    {
                        label: 'Daily Sales',
                        data: [
                            5, 10, 4, 9, 15, 6, 8
                        ],
                        backgroundColor: [
                            '#D1E902','#B4CF23','#D6D6D6','#F5F5F5',
                            '#D1E902','#B4CF23','#D6D6D6'
                        ],
                    }
                ],
                options:{
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            top: 15,
                            bottom: 20
                        }
                    },
                }
            }
        })
    }

    _getCustomerChartData() {
        //AJAX CALL
        this.setState({
            customerChartData: {
                labels: [
                    'New', 'Returning'
                ],
                datasets : [
                    {
                        data: [
                            4, 7
                        ],
                        backgroundColor: [
                            '#D1E902','#B4CF23'
                        ],
                    }
                ],
                options:{
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            top: 15,
                            bottom: 20
                        }
                    },
                }
            }
        })
    }

    _getProfitsChartData() {
        //AJAX CALL
        this.setState({
            profitsChartData: {
                labels: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
                    'Saturday', 'Sunday'
                ],
                datasets : [
                    {
                        data: [
                            800, 900, 1200, 750, 700, 1300, 1760
                        ],
                        backgroundColor: [
                            '#D1E902','#B4CF23','#D6D6D6','#F5F5F5',
                            '#D1E902','#B4CF23','#D6D6D6'
                        ],
                    }
                ],
                options:{
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            top: 15,
                            bottom: 20
                        }
                    },
                }
            }
        })
    }

    render() {
        return (
        <div className="tab-pane active" role="tabpanel" id="tab-1">
            <div className="row">
                <div className="col-12 col-md-7 col-lg-9">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <ProfitsChart  profitsChartData={this.state.profitsChartData}/>
                        </div>
                        <div className="col-12 col-lg-5">
                            {this.__showOrdersChart()}
                        </div>
                        <div className="col-12 col-lg-5">
                            <CustomersChart customerChartData={this.state.customerChartData}/>
                        </div>
                        <div className="col-12 col-lg-7">
                            <SalesChart salesChartData={this.state.salesChartData}/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="chartContainer inSeason">
                        <div className="col">
                            <h5 className="chartHeadingSmall">INGREDIENTS</h5>
                            <h5 className="chartHeading">What's in season</h5>
                        </div>
                        <div className="col inSeasonCol">
                            <>
                                <SeasonalFoods />
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

    __showOrdersChart() {
        let orderChartData = this._generateOrderChartData(this.state.orderData,this.state.mealData);
        console.log(orderChartData.amount)
        if (this.state.mealData.length > 0) {
                return (
                    <OrdersChart
                      key={orderChartData.label}
                      labels={orderChartData.label}
                      data={orderChartData.amount}
                      prices={orderChartData.price}
                      colours={orderChartData.colour}
                    />
                );
            } else {
            return null;
            }
    }          

}

export default Dashboard