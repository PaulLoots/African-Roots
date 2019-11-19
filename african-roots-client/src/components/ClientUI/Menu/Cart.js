// Cart Component

import React from 'react'
import CartItem from './CartItem'
import $ from 'jquery'

class Cart extends React.PureComponent {

    componentDidMount() {
        $("#tabUp").hide();
        var cartActive = false;

        $( "#cartHeadBtn" ).click(function() {
            if (cartActive == false){
                $("#cartContainer").toggleClass( 'ccDown', 'ccUp',300, 'swing');
                $("#tabUp").show();
                $("#tabDown").hide();
                $("#basketTotalColumn").hide();
                $(".cartAmountTxt").addClass('rightAlign');
                cartActive = true; 
            } else {
                // $("#cartContainer").toggleClass( 'ccUp', 'ccDown',300, 'swing');
                $("#tabUp").hide();
                $("#tabDown").show();
                $("#basketTotalColumn").show();
                $(".cartAmountTxt").removeClass('rightAlign');
                cartActive = false;
            }

        });
    }

    render() {
        return (
 
                <div className="col cartContainer ccDown" id="cartContainer" ref={this.cartContainer}>
                    <div className="row d-lg-none cartHead" id="cartHeadBtn">
                        <div className="col-12 cartTab">
                            <div id="tabDown" ref={this.tabDown}></div><img src="assets/img/Shivron.svg" id="tabUp" ref={this.tabUp}></img></div>
                        <div className="col-4 noPadding">
                            <p className="basketHead"><img src="assets/img/shopping-basket-7.svg" className="cartImg2"></img>Basket</p>
                        </div>
                        <div className="col">
                            <p className="cartAmountTxt" ref={this.cartAmountTxt}>{/*Cart Item Amount*/}4 Items</p>
                        </div>
                        <div className="col-4 noPadding" id="basketTotalColumn" ref={this.basketTotalColumn}>
                            <p className="basketTotal">{/*Cart Total*/}R 100.00</p>
                        </div>
                    </div>
                    <div className="row cartContent">
                        <div className="col-12 d-none d-lg-block cartHeadColumn">
                            <p className="text-right cartAmountTxt" ref={this.cartAmountTxt}>{/*Cart Item Amount*/}4 Items</p>
                        </div>
                        <div className="col-12 cartBody">

                            {/*Cart Item*/}
                            <CartItem />
                            {/*/Cart Item*/}

                            <div className="heightStopper"></div>
                        </div>
                        <div className="col-12 CartTotalSection">
                            <div className="row">
                                <div className="col">
                                    <p className="FoodNameLabelBlack">Total</p>
                                </div>
                                <div className="col">
                                    <p className="text-right cartTotalPriceLabel">{/*Cart Total*/}R 100.00</p>
                                </div>
                            </div>
                            <div className="row" id="loginToOrder">{/*Before Login*/}
                                <div className="col"><button className="btn btn-dark btn-lg btnLogin" type="button" id="loginToOrderBtn" data-toggle="modal" data-target="loginModal">Login to Order</button></div>
                            </div>
                            <div className="row d-none" id="orderBtnRow">{/*After Login*/}
                                <div className="col-4 helloTxtCol">
                                    <h6 className="text-left d-lg-flex">Hello, {/*User Name*/}Paul</h6>
                                </div>
                                <div className="col-8"><button className="btn btn-dark btn-lg btnLogin" type="button" id="orderBtn">Order</button></div>
                            </div>
                        </div>
                    </div>
                </div>      
        )
    }
}

export default Cart