// Receipt Item Component

import React from 'react'

class RecieptThumbnailItem extends React.Component {
   constructor() {
     super();
     this.state = {orderData: [],mealData: []};
   }

   render() {
      return (
      <img src={'meals-pictures/' + this.props.image} className="MenuItemThumbnail" alt="Meal"></img>
      );
   } 
}     

export default RecieptThumbnailItem