// Menu Item Component

import React from 'react'

const MenuItemDetails = () => (
  <div>
    <div className="modal fade" role="dialog" tabIndex="-1" id="menuDetailsModal">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header menuItemImage"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                <div className="modal-body menuDetailsModalBody">
                    <div className="row">
                        <div className="col noPadding">
                            <p className="menuItemName">{/*Food Name*/}{this.props.name}</p>
                        </div>
                        <div className="col noPadding">
                            <p className="menuItemTotal">{/*Food Price*/}100.00</p>
                        </div>
                    </div>
                    <div className="row menuItemDetailsBody">
                        <div className="col-12">
                            <p>{/*Food Description*/}Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                        <div className="col-12 menuItemIngredientsHeading">
                            <h5>Ingredients</h5>
                        </div>

                        {/*Ingredient Container*/}
                        {/* /Ingredient Container*/}
                        
                    </div>
                    <div className="row menuItemFooter">
                        <div className="col-6 d-inline-flex menuItemAmountPickCol"><i className="la la-minus float-left hoverItem"></i>
                            <p className="text-center FoodNameLabelBlack whiteColor">1</p><i className="la la-plus float-right hoverItem"></i></div>
                        <div className="col-6">
                            <p className="text-center addBasketBtnLG hoverItem"><img src="assets/img/shopping-basket-5.svg" className="cartImgLG"></img>Add to Basket</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  </div>
)

export default MenuItemDetails