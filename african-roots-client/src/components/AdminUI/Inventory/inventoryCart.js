import React from 'react'

class InventoryCartItem extends React.Component {
    constructor(props) {
        super(props);
        this._handleClickPlus = this._handleClickPlus.bind(this);
        this._handleClickMinus = this._handleClickMinus.bind(this);
      }
    
    _handleClickPlus(){
     this.props.addToCart(this.props.name,this.props.quantity,this.props.unit,this.props.id)
    }

    _handleClickMinus(){
        this.props.removeFromCart(this.props.name,this.props.quantity)
       }

    render() {
        return (
            <div className="row ingredientCartItem">
            <div className="col">
                <p className="FoodNameLabelBlack">{this.props.name}</p>
            </div>
            <div className="col-4">
                <div className="row">
                    <div className="col d-inline-flex IngredientCartItemAmountSelectCol"><i className="la la-minus float-left hoverItem" onClick={this._handleClickMinus}></i>
                        <p className="text-center FoodNameLabelBlack">{this.props.quantity}{this.props.unit}</p><i className="la la-plus float-right hoverItem"  onClick={this._handleClickPlus}></i></div>
                </div>
            </div>
        </div>
    );
    }
}    

export default InventoryCartItem