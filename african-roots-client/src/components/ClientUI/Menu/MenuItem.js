// Menu Item Component

import React from 'react'
import Fade from 'react-reveal/Fade'

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
      }
    
    _handleClick(){
     this.props.addToCart(this.props.name,this.props.price,this.props.image);
    }

    render() {
        const availible = this.props.isAvailible;
        let view;

        if (availible == true) {
            view = 
            <p className="addBasketBtn DarkGreen" onClick={this._handleClick}><img src="assets/img/shopping-basket-4.svg" className="cartImg" alt="Basket"></img>Add to Basket</p>
        } else {
            view = 
            <h6 style={{textAlign:"center", marginTop:'16px'}}>Out of Stock</h6>
        }

        return (
            <Fade bottom>
            <div className="col-6 col-sm-4 col-md-3 menuItem">
            <div className="card" id="menuItemCard">
                <div className="card-body" style={{backgroundImage: 'url(meals-pictures/' + this.props.image+')',backgroundSize: "cover",backgroundPosition: "center", padding: "0"}}>{/*Food Image*/}
                    <div className="cartTopHalf">
                        <div className="row blurredRow">
                            <div className="col foodNameBlock">
                                <div className="blurredImg" style={{backgroundImage: 'url(meals-pictures/' + this.props.image+')'}}></div>
                                <h4 className="FoodNameLabelWhite">{/*Food Name*/}{this.props.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row detailsRow">
                        <div className="col" style={{padding: "0"}}>
                            <h4 className="FoodPriceLabelMoney">{/*Food Price*/}R {this.props.price}.00</h4>
                            <div className="softLine textSoft"></div>
                            {view}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </Fade>
    );
    }
}    

export default MenuItem