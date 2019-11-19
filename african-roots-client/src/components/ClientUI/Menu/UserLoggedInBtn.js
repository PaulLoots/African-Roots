// Menu Item Component

import React from 'react'

class LoggedInBtn extends React.Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
      }
    
    _handleClick(){
     this.props.addToCart(this.props.name,this.props.price,this.props.image);
    }

    render() {
        return (
        <div className="row d-none" id="orderBtnRow">{/*After Login*/}
            <div className="col-4 helloTxtCol">
                <h6 className="text-left d-lg-flex">Hello, {/*User Name*/}{window.loggedInUserName}</h6>
            </div>
            <div className="col-8"><button className="btn btn-dark btn-lg btnLogin" type="button" id="orderBtn">Order</button></div>
        </div>
    );
    }
}    

export default LoggedInBtn