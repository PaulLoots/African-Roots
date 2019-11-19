import React from 'react'

class OrdersChartKey extends React.Component {
    
    render() {
        return (
        <div className="row" style={{marginBottom: '-10px', paddingLeft:'20px', paddingRight:'20px'}}>
            <div className="col-1" style={{padding: '0'}}>
                <div style={{backgroundColor: this.props.colour,width: '15px',height: '15px',borderRadius: '10px'}}></div>
            </div>
            <div className="col-auto">
                <h6 className="text-right" style={{margin: '0'}}>{this.props.label}</h6>
            </div>
            <div className="col-auto ml-auto">
                <p className="text-right cartAmountTxt" style={{marginTop: '0'}}>R {this.props.price}.00</p>
            </div>
        </div>
    );
    }
}    

export default OrdersChartKey