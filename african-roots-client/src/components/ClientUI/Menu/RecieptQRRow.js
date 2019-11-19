// Receipt Item Component

import React from 'react';
var QRCode = require('qrcode.react');

class RecieptQRRow extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
        return (
        <div className="row QRRow">
            <div className="col text-center">
            <div style={{margin:"auto", display:"table", marginBottom:"15px"}}><QRCode value={this.props.orderNumber}/></div>
                
                <h6>Order No: {/*Order Number*/}{this.props.orderNumber}</h6>
            </div>
        </div>
        );
    }
}

export default RecieptQRRow
