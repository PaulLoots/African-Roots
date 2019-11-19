//Component for Admin Inventory

import React from 'react';
import axios from "axios";
import InventoryItems from './inventoryItems';
import InventoryCartItem from './inventoryCart';
import $ from 'jquery'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

class Inventory extends React.Component {
    constructor() {
        super();
        this.state = {inventoryData: [],inventoryCart:[],filter:"All"};
        this._orderItems = this._orderItems.bind(this);
        this._addToCartHandler = this._addToCartHandler.bind(this);
        this._removeFromCartHandler = this._removeFromCartHandler.bind(this);
        this._handleAllFilter = this._handleAllFilter.bind(this);
        this._handleSeedsNutsFilter = this._handleSeedsNutsFilter.bind(this);
        this._handleLiquidsFilter = this._handleLiquidsFilter.bind(this);
        this._handleFruitsFilter = this._handleFruitsFilter.bind(this);
        this._handleVegetablesFilter = this._handleVegetablesFilter.bind(this);
        this._handleFlourSpicesFilter = this._handleFlourSpicesFilter.bind(this);
    }
  
    componentDidMount() {
      this._getInventoryData();
    }
  
    _getInventoryData() {
      let url = 'https://dev-african-roots.herokuapp.com/api/inventory';
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
            inventoryData: response.data
          });
          console.log(this.state.inventoryData);
        })
    }

    _orderItems(){
        console.log(this.state.inventoryCart)

        for (var i=0; i < this.state.inventoryCart.length; i++) {
            let data = {quantity:this.state.inventoryCart[i].quantity,_id:this.state.inventoryCart[i].id}
            this._putInventory(data);
        }

        this.setState({
            inventoryCart: []
          });
    }

    _putInventory(data) {
        axios({
            method: 'put',
            url: 'https://dev-african-roots.herokuapp.com/api/inventory/'+data._id,
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                console.log("Yay!")
                console.log(response);
                //handle success
               this._getInventoryData();
            })
            .catch(function (response) {
                //handle error
                console.log("awww!")
                console.log(response);
            });
      }

    _addToCartHandler(name,quantity,unit,id){

        let inventoryCart = this.state.inventoryCart;

        if (inventoryCart.length < 1) {
            inventoryCart.push({name:name,quantity:quantity,unit:unit,id:id});
        } else {
            inventoryCart = this._searchInventory(inventoryCart,name,quantity,unit,id);
        }

        this.setState({
            inventoryCart: inventoryCart
          });  
    }

    _removeFromCartHandler(name) {

        let inventoryCart = this.state.inventoryCart;

        for (var i=0; i < inventoryCart.length; i++) {
            if (inventoryCart[i].name === name) {
                inventoryCart[i].quantity  = inventoryCart[i].quantity - 10;
                if (inventoryCart[i].quantity < 1) {
                    inventoryCart.splice(i,1);
                }
            }
        }


        this.setState({
            inventoryCart: inventoryCart
          });
 
    }

    _searchInventory(inventoryCart,name,quantity,unit,id){

        let isSame = false;
        for (var i=0; i < inventoryCart.length; i++) {
            if (inventoryCart[i].name === name) {
                inventoryCart[i].quantity  = inventoryCart[i].quantity + 10;
                return inventoryCart;
            } else {
                isSame = true;
            }
        }
        if (isSame = true){
          inventoryCart.push({name:name,quantity:quantity,unit:unit,id:id});
          return inventoryCart;
        }
    }

    _handleAllFilter(){
        this.updateFilter("All");
        $("#filterAll").addClass('DarkGreen');
        $("#filterFruits").removeClass('DarkGreen');
        $("#filterVegetables").removeClass('DarkGreen');
        $("#filterFlourSpices").removeClass('DarkGreen');
        $("#filterLiquids").removeClass('DarkGreen');
        $("#filterSeedsNuts").removeClass('DarkGreen');
      }

      _handleFruitsFilter(){
        this.updateFilter("Fruits");
        $("#filterAll").removeClass('DarkGreen');
        $("#filterFruits").addClass('DarkGreen');
        $("#filterVegetables").removeClass('DarkGreen');
        $("#filterFlourSpices").removeClass('DarkGreen');
        $("#filterSeedsNuts").removeClass('DarkGreen');
        $("#filterLiquids").removeClass('DarkGreen');
      }

      _handleVegetablesFilter(){
        this.updateFilter("Vegetables");
        $("#filterAll").removeClass('DarkGreen');
        $("#filterFruits").removeClass('DarkGreen');
        $("#filterVegetables").addClass('DarkGreen');
        $("#filterFlourSpices").removeClass('DarkGreen');
        $("#filterSeedsNuts").removeClass('DarkGreen');
        $("#filterLiquids").removeClass('DarkGreen');
      }

      _handleFlourSpicesFilter(){
        this.updateFilter("FlourSpices");
        $("#filterAll").removeClass('DarkGreen');
        $("#filterFruits").removeClass('DarkGreen');
        $("#filterVegetables").removeClass('DarkGreen');
        $("#filterFlourSpices").addClass('DarkGreen');
        $("#filterSeedsNuts").removeClass('DarkGreen');
        $("#filterLiquids").removeClass('DarkGreen');
      }

      _handleSeedsNutsFilter(){
        this.updateFilter("SeedsNuts");
        $("#filterAll").removeClass('DarkGreen');
        $("#filterFruits").removeClass('DarkGreen');
        $("#filterVegetables").removeClass('DarkGreen');
        $("#filterFlourSpices").removeClass('DarkGreen');
        $("#filterSeedsNuts").addClass('DarkGreen');
        $("#filterLiquids").removeClass('DarkGreen');
      }

      _handleLiquidsFilter(){
        this.updateFilter("Liquids");
        $("#filterAll").removeClass('DarkGreen');
        $("#filterFruits").removeClass('DarkGreen');
        $("#filterVegetables").removeClass('DarkGreen');
        $("#filterFlourSpices").removeClass('DarkGreen');
        $("#filterSeedsNuts").removeClass('DarkGreen');
        $("#filterLiquids").addClass('DarkGreen');
      }

      updateFilter(filter){
        this.setState({
            filter: filter
        });
    }

    _passFilter(items){

        let filteredData = [];

        for (var i=0; i < this.state.inventoryData.length; i++) {
            if (this.state.filter === "All") {
                    filteredData.push(this.state.inventoryData[i]);
            } else
            if (this.state.filter === "SeedsNuts") {
                if (this.state.inventoryData[i].category === "SeedsNuts") {
                    filteredData.push(this.state.inventoryData[i]);
                }
            } else
            if (this.state.filter === "Fruits") {
                if (this.state.inventoryData[i].category === "Fruits") {
                    filteredData.push(this.state.inventoryData[i]);
                }

            } else
            if (this.state.filter === "Vegetables") {
                if (this.state.inventoryData[i].category === "Vegetables") {
                    filteredData.push(this.state.inventoryData[i]);
                }

            } else
            if (this.state.filter === "FlourSpices") {
                if (this.state.inventoryData[i].category === "FlourSpices") {
                    filteredData.push(this.state.inventoryData[i]);
                }

            } else
            if (this.state.filter === "Liquids") {
                if (this.state.inventoryData[i].category === "Liquids") {
                    filteredData.push(this.state.inventoryData[i]);
                }

            }
            
        }

        return(filteredData);
    }
  
    render() {
      return (
        <div className="tab-pane" role="tabpanel" id="tab-2">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-7 col-xl-8">
                <div className="row InventoryFilterBG">
                    <div className="col-4 col-md-2 filterItem" onClick={this._handleAllFilter}><img className="d-table filterIcon" src="assets/img/groceries.svg"></img>
                        <p className="d-table DarkGreen filterItemCaption" id="filterAll">All</p>
                    </div>
                    <div className="col-4 col-md-2 filterItem" id="filterFruits" onClick={this._handleFruitsFilter}><img className="d-table filterIcon" src="assets/img/fruits.svg"></img>
                        <p className="d-table filterItemCaption">Fruits</p>
                    </div>
                    <div className="col-4 col-md-2 filterItem" id="filterVegetables" onClick={this._handleVegetablesFilter}><img className="d-table filterIcon" src="assets/img/vegetables.svg"></img>
                        <p className="d-table filterItemCaption">Vegetables</p>
                    </div>
                    <div className="col-4 col-md-2 filterItem" id="filterFlourSpices" onClick={this._handleFlourSpicesFilter}><img className="d-table filterIcon" src="assets/img/garlic.svg"></img>
                        <p className="d-table filterItemCaption">Flour | Spices</p>
                    </div>
                    <div className="col-4 col-md-2 filterItem" id="filterSeedsNuts" onClick={this._handleSeedsNutsFilter}><img className="d-table filterIcon" src="assets/img/almond.svg"></img>
                        <p className="d-table filterItemCaption">Seeds | Nuts</p>
                    </div>
                    <div className="col-4 col-md-2 filterItem" id="filterLiquids" onClick={this._handleLiquidsFilter}><img className="d-table filterIcon" src="assets/img/almond-milk.svg"></img>
                        <p className="d-table filterItemCaption">Liquids</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5 col-xl-4 ml-xl-auto">
                <div className="row InventoryFilterBG">
                    <div className="col-8">
                        <div><a className="btn btn-light collapseItemCart" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" role="button" href="#collapse-1">Ingredients Cart&nbsp;<i className="material-icons downIcon">keyboard_arrow_down</i></a>
                            <div className="collapse ingredientOrderCart" id="collapse-1">
                                <div className="row ingredientCartItem">
                                    <div className="col-4 ml-auto">
                                        <p className="text-center text-secondary FoodNameLabelBlack">AMOUNT</p>
                                    </div>
                                </div>
                                {this.__showInventoryCartItems()}
                                <div className="row ingredientOrderBtn">
                                    <div className="col"><button className="btn btn-dark btn-lg btnLogin" type="button" onClick={this._orderItems}>Order Items</button></div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col ingredientCartAmount">
                    <h6 className="text-right">{this.state.inventoryCart.length} ITEMS</h6>
                </div>
            </div>
        </div>
        </div>
        <div className="row inventoryItemsContainer">
            {this.__showFinishedItems()}
            {this.__showInventoryItems()}
            <div className="col"></div>
        </div>
        </div>

        );
    }

    __showFinishedItems() {
        let filteredData = this._passFilter(this.state.inventoryData);
        if (filteredData.length > 0) {
          return filteredData.map(item => {
            if (item.quantity < 10){
            return (
            <InventoryItems
                key={item._id}
                id={item._id}
                name={item.name}
                unit={item.unit}
                quantity={item.quantity}
                image={item.image}
                addToCart={this._addToCartHandler}
            />
            );
            };
          });
        } else {
          return null;
        }
      }

    __showInventoryItems() {
        let filteredData = this._passFilter(this.state.inventoryData);
        if (filteredData.length > 0) {
          return filteredData.map(item => {
            if (item.quantity > 9){
            return (
            <InventoryItems
                key={item._id}
                id={item._id}
                name={item.name}
                unit={item.unit}
                quantity={item.quantity}
                image={item.image}
                addToCart={this._addToCartHandler}
            />
            );
            };
          });
        } else {
          return null;
        }
      }

      __showInventoryCartItems() {

        if (this.state.inventoryCart.length > 0) {
          return this.state.inventoryCart.map(item => {
            return (
            <InventoryCartItem
                key={item.name}
                id={item._id}
                name={item.name}
                unit={item.unit}
                quantity={item.quantity}
                addToCart={this._addToCartHandler}
                removeFromCart={this._removeFromCartHandler}
            />
            );
          });
        } else {
          return null;
        }
      }
}

export default Inventory