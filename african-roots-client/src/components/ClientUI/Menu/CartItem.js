import React from 'react'
import Slide from 'react-reveal/Slide';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this._handleClickPlus = this._handleClickPlus.bind(this);
        this._handleClickMinus = this._handleClickMinus.bind(this);
        this._handleClickRemove = this._handleClickRemove.bind(this);
      }
    
    _handleClickPlus(){
      this.props.addToCart(this.props.name,this.props.price,this.props.image);
    }

    _handleClickMinus(){
      this.props.removeFromCart(this.props.name)
    }

    _handleClickRemove(){
      this.props.deleteFromCart(this.props.name)
    }  

    render() {
        return (
          <Slide left>
          <div className="row cartItem">
            <div className="col-3 cartItemImg" style={{backgroundImage: 'url(meals-pictures/' + this.props.image +')'}}>{/*Food Image*/}</div>
            <div className="col cartItem">
              <div className="row">
                <div className="col">
                  <p className="FoodNameLabelBlack">{/*Food Name*/}{this.props.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col cartItemPriceCol">
                  <p className="FoodPriceLabelMoneyLeft">{/*Food Price*/}R {this.props.price}.00</p>
                </div>
              </div>
            </div>
            <div className="col cartItem">
              <div className="row">
                <div className="col"><i className="la la-close float-right hoverItem" onClick={this._handleClickRemove}></i></div>
              </div>
              <div className="row cartItemAmountSelect">
                <div className="col d-inline-flex cartItemAmountSelectCol"><i className="la la-minus float-left hoverItem" onClick={this._handleClickMinus}></i>
                  <p className="text-center FoodNameLabelBlack">{/*Food Amount*/}{this.props.amount}</p><i className="la la-plus float-right hoverItem" onClick={this._handleClickPlus}></i></div>
              </div>
            </div>
          </div>
          <div className="cartItemDevider"></div>
        </Slide>
    );
    }
}    

export default CartItem