import React from 'react'
import Fade from 'react-reveal/Fade'

class InventoryItems extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
      }
    
    _handleClick(){
     this.props.addToCart(this.props.name,this.props.quantity,this.props.unit,this.props.id)
    }

    render() {
        const quantity = this.props.quantity;
        let view;

        if(quantity < 10){
            view =
            <h4 className="FoodPriceLabelMoney">All out!</h4>
        } else {
            view =
            <h4 className="FoodPriceLabelMoney">{this.props.quantity}{this.props.unit}</h4>
        }
        
        return (
        <Fade bottom>
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 employeeItemnCol">
            <div className="ingredientImageCard">
                <div className="ingredientImageItem" style={{backgroundImage: 'url(ingredients-pictures/' + this.props.image+')'}}></div>
                <p className="text-center employeeItemName">{this.props.name}</p>
                <div className="col ingredientItemIntroBox">
                    <h5 className="ingredientHeadText">AMOUNT</h5>
                    {view}
                    <p className="addBasketBtn DarkGreen" onClick={this._handleClick}><i className="la la-cart-plus"></i>&nbsp;Order Ingredient</p>
                </div>
            </div>
        </div>
        </Fade>
    );
    }
}    

export default InventoryItems