// Receipt Item Component

import React from 'react'

class RecieptMenuItem extends React.Component {
   constructor() {
     super();
     this.state = {orderData: [],mealData: []};
   }

   render() {
      return (
      <div className="col-12 d-inline-flex">
         <p className="FoodNameLabelReceipt">{this.props.name}</p>
         <p className="d-xl-flex ml-auto FoodPriceLabelReceipt">R {this.props.price}.00</p>
      </div> 
      );
   } 
}     

export default RecieptMenuItem