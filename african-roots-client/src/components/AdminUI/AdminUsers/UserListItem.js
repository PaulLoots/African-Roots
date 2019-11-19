//List Item for Paid Column In Order List

import React from 'react'
import axios from "axios";

class UserListItem extends React.Component {
    constructor() {
      super();
      this.state = {orderData: [],mealData: []};
      this._handleCustomer = this._handleCustomer.bind(this);
      this._handleEmployee = this._handleEmployee.bind(this);
      this._handleAdmin = this._handleAdmin.bind(this);
    }

    componentDidMount() {

      }

      _handleEmployee(){
        let data = {role:1}
        this._putOrder(data);
        console.log(data);
      };

      _handleCustomer(){
        let data = {role:0}
        this._putOrder(data);
        console.log(data);
      };

      _handleAdmin(){
        let data = {role:2}
        this._putOrder(data);
        console.log(data);
      };

      _putOrder(data) {
        axios({
            method: 'put',
            url: 'https://dev-african-roots.herokuapp.com/api/admin/users/'+this.props.id,
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                console.log("Yay!")
                console.log(response);
                //handle success
               this.props.getUserData();
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
      const type = this.props.type;
      let view;
      let view2;

      if (type === 0) {
        view = 
        <div className="col"><button className="btn btn-dark btn-lg btnUserChange" type="button" onClick={this._handleEmployee}>Employee</button></div>
        view2 =
        <div className="col"><button className="btn btn-dark btn-lg btnServeOrder" type="button" onClick={this._handleAdmin}>Admin</button></div>

    } else if (type === 1) {
      view = 
      <div className="col"><button className="btn btn-light btn-lg btnUserChange" type="button" onClick={this._handleCustomer}>Customer</button></div>
      view2 =
      <div className="col"><button className="btn btn-dark btn-lg btnServeOrder" type="button" onClick={this._handleAdmin}>Admin</button></div>

    } else if (type === 2) {
      view = 
        <div className="col"><button className="btn btn-light btn-lg btnUserChange" type="button" onClick={this._handleCustomer}>Customer</button></div>
        view2 =
        <div className="col"><button className="btn btn-dark btn-lg btnUserChange" type="button" onClick={this._handleEmployee}>Employee</button></div>
    }

      return (
        <div className="row OrderListRow">
        <div className="col receiptsCard" style={{paddingBottom: '15px'}}>
            <div className="row">
                <div className="col-12 d-inline-flex">
                    <p>{this.props.name}</p>
                </div>
                <div className="col-12 d-inline-flex">
                    <p className="d-xl-flex mr-auto FoodPriceLabelReceipt">{this.props.email}</p>
                </div>
                <div className="col">
                    <div className="cartItemDevider"></div>
                </div>
                <div className="col-12 d-inline-flex">
                    <div style={{width: '100%'}}><a className="btn btn-outline-link btn-sm d-lg-flex justify-content-lg-end" data-toggle="collapse" aria-expanded="false" aria-controls={this.props.id} role="button" href={'#r'+this.props.id}>promote to <i className="la la-angle-down float-right d-lg-flex greenIcon" style={{marginTop: '0px'}}></i></a>
                        <div className="collapse" id={'r'+this.props.id}>
                            <div className="row" style={{marginTop: '15px'}}>
                               {view}
                               {view2} 
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

        );
    }
}

export default UserListItem