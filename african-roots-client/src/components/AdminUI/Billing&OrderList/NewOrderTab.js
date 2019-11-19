//Tab For Creating a New Order

import React from 'react'
import QrReader from 'react-qr-reader'
import axios from "axios";
import RecieptMenuItem from '../../ClientUI/Menu/RecieptMenuItem';

class NewOrderTab extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowReceipt = this.handleShowReceipt.bind(this);
        this.handleshowNum = this.handleshowNum.bind(this);
        this.handleCompletePurchase = this.handleCompletePurchase.bind(this);
        this.handleCompletePay = this.handleCompletePay.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this.handleNumSubmit = this.handleNumSubmit.bind(this);
        this.state = {show: "default",
                      payOrder: {},
                      orderData: [],
                      orderNoError: ""};
      }

      componentDidMount() {
        this._getOrderData();
        this._getMealData();
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

      _handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleNumSubmit() {
        let payOrder= this._searchOrders(this.state.orderNum,this.state.orderData);
            if(payOrder != null && payOrder.order_status == 0){
                this.setState({
                    payOrder: payOrder,
                    show: "receipt",
                    orderNum: null,
                    orderNoError: ""
                })
                this._handleOrderUpdate(payOrder._id)
            } else {
                console.log("order does not exist")
                this.setState({
                    orderNoError: "invalid order number"
                })
            }
      }

      _handleOrderUpdate(orderId){
        let data = {order_status:1}
        this._putOrder(data,orderId);
      };

      _putOrder(data,orderId) {
        axios({
            method: 'put',
            url: 'https://dev-african-roots.herokuapp.com/api/orders/'+orderId,
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                console.log("Yay!")
                console.log(response);
                this.props.getOrderData();
                //handle success
            })
            .catch(function (response) {
                //handle error
                console.log("awww!")
                console.log(response);
            });
      }
    
      handleShowReceipt() {
        this.setState({show: "scan"});
      }

      handleCompletePay() {
        this.setState({show: "pay"});
      }

      handleshowNum() {
        this.setState({show: "num"});
      }

      handleCompletePurchase() {
        this.setState({show: "default"});
      }

      handleScan = data => {
        if (data) {
            let payOrder= this._searchOrders(data,this.state.orderData);
            if(payOrder != null){
                this.setState({
                    payOrder: payOrder,
                    show: "receipt",
                    orderNoError: ""
                })
                this._handleOrderUpdate(payOrder._id)
            } else {
                console.log("order does not exist")
                this.setState({
                    orderNoError: "invalid order number"
                })
            }
        }
      }
      handleError = err => {
        console.error(err)
      }

      _searchOrders(scannedQR, orderData){
        let order= null;
        for (var i=0; i < orderData.length; i++) {
            if (orderData[i].order_number === scannedQR) {
                order = orderData[i]
            } 
        }

        return order;
      }

      _searchMeals(mealID, mealData, isTotal){
        let meals= [];
        let orderTotal = 0;
        for (var i=0; i < mealData.length; i++) {
            if (Array.isArray(mealID)) {
                for (var j=0; j < mealID.length; j++) {
                    if (mealData[i]._id === mealID[j]) {
                        meals.push(mealData[i]);
                        orderTotal = orderTotal + mealData[i].price_id;
                    }
                }
            }
            else if (mealData[i]._id === mealID) {
                meals.push(mealData[i])
            }
        }


        console.log(orderTotal);
        if(isTotal){
            return orderTotal;
        } else {
            return meals;
        }

      }


    render() {
        const show = this.state.show;
        const order = this.state.payOrder;
        let view;

        if (show == "default") {
            view = 
            <div className="row NewOrderRow">
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2 ml-auto employeeItemnCol">
                    <div className="employeeItem" onClick={this.handleShowReceipt}><i className="fa fa-qrcode d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center SelectOrderRowIcon"></i>
                        <p className="text-center employeeItemName">Scan QR Code</p>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2 mr-auto employeeItemnCol">
                    <div className="employeeItem" onClick={this.handleshowNum}><i className="la la-i-cursor d-flex d-lg-flex d-xl-flex justify-content-center justify-content-lg-center justify-content-xl-center SelectOrderRowIcon"></i>
                        <p className="text-center employeeItemName">Enter Order No</p>
                    </div>
                </div>
            </div>;
        } else if (show == "scan") {
            view = 
            <div class="col-xs-12 col-md-8 col-lg-6">
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%'}}
            />
            <p>{this.state.result}</p>
            <p style={{textAlign:'center', color:'red'}}>{this.state.orderNoError}</p>
            <button className="btn btn-dark btn-lg btnPayType" type="button" onClick={this.handleCompletePurchase}>Cancel</button>
            </div>

        } else if (show == "receipt") {
            view = 
            <div>
                <div className="row BillingRecieptRow">
                    <div className="col-12 col-sm-8 col-lg-6 col-xl-4 mx-auto receiptsCard">
                        <div className="row">
                            <div className="col-12 d-inline-flex">
                                <p>{order.user_name}</p>
                                <p className="d-xl-flex ml-auto FoodPriceLabelReceipt">{order.order_number}</p>
                            </div>
                            <div className="col-12 d-inline-flex totalReceiptCol">
                                <p className="receiptTimestamp">02 March 2019</p>
                                <p className="d-xl-flex ml-auto receiptTimestamp">10:05</p>
                            </div>
                        </div>
                        <div className="row">
                            {/* Billing Receipt Menu Item */}
                            {this.__showMenuItem()}
                            {/* /Billing Receipt Menu Item */}
                            <div className="col-12 d-inline-flex totalReceiptCol">
                                <p className="FoodNameLabelReceipt">Total</p>
                                <p className="d-xl-flex ml-auto FoodPriceLabelReceipt">R {this._searchMeals(this.state.payOrder.meal_id,this.state.mealData, true)}.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col BillingRecieptPaymentCol">
                        <h6 className="text-center">Payment</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 d-xl-flex ml-auto PaymentBtnCol"><button className="btn btn-dark btn-lg btnPayType" type="button" onClick={this.handleCompletePay}><i className="icon ion-cash greenIcon"></i>Cash</button></div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2 d-xl-flex mr-auto PaymentBtnCol"><button className="btn btn-dark btn-lg btnPayType" type="button" onClick={this.handleCompletePay}><i className="icon ion-card greenIcon"></i>Card</button></div>
                </div>
            </div>
        } else if (show == "pay") {
            view = 
            <div role="dialog" tabIndex="-1" className="modal fade show" style={{display: 'block'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor: '#f6f6f6'}}>
                            <h4 className="modal-title">PAYMENT</h4><button type="button" className="close" onClick={this.handleCompletePurchase}><span aria-hidden="true">×</span></button></div>
                        <div className="modal-body" style={{padding: '0px',backgroundColor: '#f6f6f6'}}>
                            <div className="row">
                                <div className="col"><img src="assets/img/IMG_0694.gif" width="100%" /></div>
                            </div>
                            <div className="row">
                                <div className="col-10 col-sm-8 d-xl-flex mx-auto PaymentBtnCol"><button className="btn btn-dark btn-lg btnAction" type="button" onClick={this.handleCompletePurchase}>Payment Complete</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (show == "num") {
            view = 
            <div role="dialog" tabIndex="-1" className="modal fade show" style={{display: 'block'}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor: '#f6f6f6'}}>
                            <h4 className="modal-title">ORDER NO</h4><button type="button" className="close" className="close" onClick={this.handleCompletePurchase}><span aria-hidden="true">×</span></button></div>
                        <div className="modal-body" style={{padding: '0px',backgroundColor: '#f6f6f6'}}>
                            <div className="row">
                                <div className="col-8 d-inline-flex mx-auto"><input type="text" autofocusplaceholder="Order Number" className="form-control-lg" name="orderNum" onChange={this._handleChange} style={{borderStyle:'none', width:'100%', marginBottom:'60px', marginTop:'60px'}}/></div>
                            </div>
                            <p style={{textAlign:'center', color:'red'}}>{this.state.orderNoError}</p>
                            <div className="row">
                            <div className="col-10 col-sm-8 d-xl-flex mx-auto PaymentBtnCol"><button className="btn btn-dark btn-lg btnAction" type="button" onClick={this.handleNumSubmit}>Enter</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        return (
            <div className="tab-pane active" role="tabpanel" id="tab-1">
                {/* Shows once an order item has been scanned/entered */}
                {view}
            </div>
            )
    }


    __showMenuItem() {
        let meals = this._searchMeals(this.state.payOrder.meal_id,this.state.mealData, false);
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

export default NewOrderTab