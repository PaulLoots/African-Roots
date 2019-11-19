import React from 'react';
import axios from "axios";
import Header from './Header';
import CartItem from './CartItem';
import MenuItem from './MenuItem';
import Login from '../Home/Login';
import CreateAccount from '../Home/CreateAccount';
import 'bootstrap/js/src/modal'
import $ from 'jquery'
import Reciepts from './Reciepts';
import MenuItemDetails from './MenuItemDetails';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {menuData: [], inventoryData: [],menuCart:[], cartTotal: 0,filter:"Food", badge:'', loggedIn:false, ordered:false};
        this._addToCartHandler = this._addToCartHandler.bind(this);
        this._removeFromCartHandler = this._removeFromCartHandler.bind(this);
        this._deleteFromCartHandler = this._deleteFromCartHandler.bind(this);
        this._updateFilter = this._updateFilter.bind(this);
        this._loginAccepted = this._loginAccepted.bind(this);
        this._logOut = this._logOut.bind(this);
        this._postOrder = this._postOrder.bind(this);
    }
  
    componentDidMount() {
      this._getMenuData();
      this._getInventoryData();
      if (sessionStorage.getItem('userName') != null){
        this.setState({
            loggedIn: true
          }); 
      }
    }
  
    _getMenuData() {
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
            menuData: response.data
          });
        })
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
          })
      }

    _addToCartHandler(name,price,image){

        let menuCart = this.state.menuCart;

        if (menuCart.length < 1) {
            menuCart.push({name:name,price:price,amount:1,image:image});
        } else {
            menuCart = this._searchInventory(menuCart,name,price,image);
        }

        this.setState({
            menuCart: menuCart
        });
    
        this._updateCartTotal();
    }

    _removeFromCartHandler(name) {

        let menuCart = this.state.menuCart;

        for (var i=0; i < menuCart.length; i++) {
            if (menuCart[i].name == name) {
                menuCart[i].amount  = menuCart[i].amount - 1;
                if (menuCart[i].amount < 1) {
                    menuCart.splice(i,1);
                }
            }
        }

        this.setState({
            menuCart: menuCart
          });

        this._updateCartTotal();
    }

    _deleteFromCartHandler(name) {

        let menuCart = this.state.menuCart;

        for (var i=0; i < menuCart.length; i++) {
            if (menuCart[i].name == name) {
                menuCart.splice(i,1);
            }
        }


        this.setState({
            menuCart: menuCart
          });
        this._updateCartTotal();
    }

    _searchInventory(menuCart,name,price,image){
        let isSame = false;
        for (var i=0; i < menuCart.length; i++) {
            if (menuCart[i].name == name) {
                menuCart[i].amount  = menuCart[i].amount + 1;
                return menuCart;
            } else {
                isSame = true;
            }
        }
        if (isSame = true){
          menuCart.push({name:name,price:price,amount:1,image:image});
          return menuCart;
        }
    }

    _updateCartTotal(){
        let total = 0;
        for (var i=0; i < this.state.menuCart.length; i++) {
            total = (total + this.state.menuCart[i].price) * this.state.menuCart[i].amount;
        }

        this.setState({
            cartTotal: total
          });
        console.log(this.state.menuCart)  
    }

    _updateFilter(filter){
        this.setState({
            filter: filter
        });
    }

    _passFilter(items){

        let filteredData = [];

        for (var i=0; i < this.state.menuData.length; i++) {
            if (this.state.filter == "Food") {
                if (this.state.menuData[i].category == "Breakfasts" || this.state.menuData[i].category == "Light meals") {
                    filteredData.push(this.state.menuData[i]);
                }
            } else {
                if (this.state.menuData[i].category == this.state.filter) {
                    filteredData.push(this.state.menuData[i]);
                }
            }
            
        }

        return(filteredData);
    }

    _getMenuIds(){

        let menuIds = [];

        for (var i=0; i < this.state.menuCart.length; i++) {
            for (var j=0; j < this.state.menuData.length; j++) {
                if(this.state.menuCart[i].name == this.state.menuData[j].name){
                    let count = this.state.menuCart[i].amount
                    while(count > 0){
                        menuIds.push(this.state.menuData[j]._id)
                        this._subtractIngredient(this.state.menuData[j])
                        count = count - 1
                    }
                }
            }
        }

        return(menuIds);
    }

    _subtractIngredient(menuItem){
        for (var i=0; i < menuItem.ingredient_id.length; i++) {
            for (var j=0; j < this.state.inventoryData.length; j++) {
                if (menuItem.ingredient_id[i] == this.state.inventoryData[j].name){
                    console.log(this.state.inventoryData[j]._id);
                    let data = {quantity:this.state.inventoryData[j].quantity - 10,_id:this.state.inventoryData[j]._id}
                    this._putInventory(data);
                }
        }
    }
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

    _loginAccepted() {
        $('#loginModal').modal('hide');
        $('#signUpModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.setState({
            loggedIn: true
        });
    }

    _logOut() {
        this.setState({
            loggedIn: false
        });
    }

    _generateOrderNumber(){
        let d = new Date();
        d = d.getTime();
        let n = d.toString();
        n = n.substring(4,12)
        return n;
    }

    _postOrder() {
        if (this.state.menuCart.length > 0){
            console.log("la")
        let data = {user_name:sessionStorage.getItem('userName'), 
                    user_id:sessionStorage.getItem('userId'), 
                    order_number:this._generateOrderNumber(),
                    order_status:0,
                    meal_id:this._getMenuIds()}
        
        axios({
            method: 'post',
            url: 'https://dev-african-roots.herokuapp.com/api/orders',
            data: data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                //handle success
                this.setState({
                    menuCart: [],
                    badge:'1'
                });
                this._updateCartTotal();
                this.setState({
                    ordered: true
                }); 
                this.refs.receipts._getReceiptOrderData();
            })
            .catch(function (response) {
                //handle error
                console.log("awww!")
                console.log(response);
            });
        }
      }

      _checkIngredients(ingredients){
        for (var i=0; i < ingredients.length; i++) {
            for (var j=0; j < this.state.inventoryData.length; j++) {
                if (ingredients[i] == this.state.inventoryData[j].name){
                    if(this.state.inventoryData[j].quantity < 10){
                        return false;
                    }
                }
        }
    }

    return true;
    }
  
    render() {
        const user = sessionStorage.getItem('userName')
        let view;
        let view1;
        let view2;
        let view3;

        if (user == null) {
            view = 
            <div className="row" id="loginToOrder">{/*Before Login*/}
                <div className="col"><button className="btn btn-dark btn-lg btnLogin" type="button" id="loginToOrderBtn" data-toggle="modal" data-target="loginModal" data-toggle="modal" data-target="#loginModal">Login to Order</button></div>
            </div>
        } else {
            view = 
            <div className="row" id="orderBtnRow">{/*After Login*/}
                <div className="col-4 helloTxtCol" style={{marginTop:'-12px'}}>
                    <h6 className="text-left d-lg-flex">Hello, {/*User Name*/}{user}</h6>
                </div>
                <div className="col-8"><button className="btn btn-dark btn-lg btnLogin" type="button" id="orderBtn" onClick={this._postOrder}>Order</button></div>
            </div>
        }

        if (this.state.menuCart.length > 0) {
            view1 = 
            <div className="col-12 d-none d-lg-block cartHeadColumn">
                <p className="text-right cartAmountTxt" ref={this.cartAmountTxt}>{/*Cart Item Amount*/}{this.state.menuCart.length} Items</p>
            </div>
            view2 = 
            <div className="col-12 cartBody">

                {/*Cart Item*/}
                {this.__showCartItems()}
                {/*/Cart Item*/}

                <div className="heightStopper"></div>
            </div>
            view3 = 
            <div className="col-12 CartTotalSection">
                <div className="row">
                    <div className="col">
                        <p className="FoodNameLabelBlack">Total</p>
                    </div>
                    <div className="col">
                        <p className="text-right cartTotalPriceLabel">{/*Cart Total*/}R {this.state.cartTotal}.00</p>
                    </div>
                </div>
                {view}
            </div>
        } else if (this.state.ordered == true){
            view1 = 
            
            <div class="col-12 d-none d-lg-block my-auto cartHeadColumn">
            <i class="material-icons d-lg-flex justify-content-lg-center" style={{color:'#B4CF23',marginBottom:'10px'}}>check</i>
                <h6 class="text-center">Order Was Successful!</h6>
                <p class="text-center cartAmountTxt">saved to receipts</p>
            </div>
        } else {
            view1 = 
            <div class="col-12 d-none d-lg-block my-auto cartHeadColumn"><img src="assets/img/shopping-basket-7.svg" class="d-table d-lg-flex cartImgOrange" style={{margin: 'auto'}} />
                <p class="text-center cartAmountTxt">the basket is empty </p>
            </div> 
        }

      return (
        <div>
                <div className="background" style={{backgroundSize: '200px',backgroundImage: `url(assets/img/Asset%203.svg)`}}></div>
                {/*Nav*/}
                {this.__showHeader()}
                {/*/Nav*/}


                {/*Body Container*/}
                <div className="container">
                    <div className="row">

                    {/*Menu Cards Container*/}
                    <div className="col-12 col-lg-8 cardsContainer" style={{margin: '0px',marginBottom:'-100px',height:'80vh',overflow:'scroll'}}>
                        
                        <div className="row" style={{margin: '0px'}}>
                            {/*Menu Card*/}
                            {this.__showMenuItems()}
                            {/*/Menu Card*/}
                        </div>
                    </div>
                    {/*/Menu Cards Container*/}

                    {/* Cart Container */}
                    <div className="col cartContainer ccDown" id="cartContainer" ref={this.cartContainer}>
                        <div className="row d-lg-none cartHead" id="cartHeadBtn">
                            <div className="col-12 cartTab">
                                <div id="tabDown" ref={this.tabDown}></div><img src="assets/img/Shivron.svg" id="tabUp" ref={this.tabUp}></img></div>
                            <div className="col-4 noPadding">
                                <p className="basketHead"><img src="assets/img/shopping-basket-7.svg" className="cartImg2"></img>Basket</p>
                            </div>
                            <div className="col">
                                <p className="cartAmountTxt" ref={this.cartAmountTxt}>{/*Cart Item Amount*/}{this.state.menuCart.length} Items</p>
                            </div>
                            <div className="col-4 noPadding" id="basketTotalColumn" ref={this.basketTotalColumn}>
                                <p className="basketTotal">{/*Cart Total*/}{this.state.cartTotal}</p>
                            </div>
                        </div>
                        <div className="row cartContent">
                            {view1}
                            {view2}
                            {view3}
                        </div>
                    </div>  
                    {/* /Cart Container */}

                    {/* Receipts Container */}
                    {this.__showReceipts()}
                    {/* /Receipts Container */}
                    </div>
                </div>

                {/* /Body Container */}

                {/*Menu Item Details Modal*/}
                {/* <MenuItemDetails /> */}
                {/*/Menu Item Details Modal*/}

                {/*Log In Modal*/}
                <Login loginAccepted={this._loginAccepted}/>
                {/*/Log In Modal*/}

                {/*Sign Up Modal*/}
                <CreateAccount loginAccepted={this._loginAccepted}/>
                {/*/Sign Up Modal*/}

            </div>

        );
    }

    __showHeader() {
            return (
            <Header
                updateFilter={this._updateFilter}
                logOut={this._logOut}
                loginStatus={this.state.loggedIn}
                badge={this.state.badge}
            />
            );
      }

    __showMenuItems() {
        let filteredData = this._passFilter(this.state.menuData);
        if (filteredData.length > 0) {
          return filteredData.map(item => {
            let isAvailible = this._checkIngredients(item.ingredient_id)
            return (
            <MenuItem
                key={item._id}
                name={item.name}
                price={item.price_id}
                image={item.image}
                isAvailible={isAvailible}
                addToCart={this._addToCartHandler}
            />
            );
          });
        } else {
          return null;
        }
      }

      __showCartItems() {

        if (this.state.menuCart.length > 0) {
          return this.state.menuCart.map(item => {
            return (
            <CartItem
                key={item.name}
                name={item.name}
                price={item.price}
                amount={item.amount}
                image={item.image}
                addToCart={this._addToCartHandler}
                removeFromCart={this._removeFromCartHandler}
                deleteFromCart={this._deleteFromCartHandler}
            />
            );
          });
        } else {
          return null;
        }
      }

      __showReceipts() {
        return (
        <Reciepts
            ref="receipts"
        />
        );
  }
}

export default Menu