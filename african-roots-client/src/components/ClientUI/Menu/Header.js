// Header on all pages 

import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to th

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this._handleFoodFilter = this._handleFoodFilter.bind(this);
        this._handleDessertsFilter = this._handleDessertsFilter.bind(this);
        this._handleDrinksFilter = this._handleDrinksFilter.bind(this);
        this._handleToReceiptsChange = this._handleToReceiptsChange.bind(this);
        this._handleToCartChange = this._handleToCartChange.bind(this);
        this._handleLogout = this._handleLogout.bind(this);
      }

    componentDidMount() {
    }

    _handleToReceiptsChange(){
        //Swap active cart button with inactive one
        $("#cartHeadingActive").removeClass('d-inline-flex');
        $("#cartHeadingActive").addClass('d-none');
        $("#cartHeadingInactive").addClass('d-inline-flex');
        $("#cartHeadingInactive").removeClass('d-none');
        //Swap inactive receipt button with active one
        $("#receiptsHeadingActive").removeClass('d-none');
        $("#receiptsHeadingActive").addClass('d-inline-flex');
        $("#receiptsHeadingInactive").removeClass('d-inline-flex');
        $("#receiptsHeadingInactive").addClass('d-none');
        //Show receipts pane
        $("#cartContainer").removeClass('d-block');
        $("#cartContainer").addClass('d-none');
        $("#receiptsContainer").addClass('d-block');
        $("#receiptsContainer").removeClass('d-none');
    }

    _handleToCartChange(){
        //Swap active receipt button with inactive one
        $("#receiptsHeadingActive").removeClass('d-inline-flex');
        $("#receiptsHeadingActive").addClass('d-none');
        $("#receiptsHeadingInactive").addClass('d-inline-flex');
        $("#receiptsHeadingInactive").removeClass('d-none');
        //Swap active cart button with inactive one
        $("#cartHeadingActive").removeClass('d-none');
        $("#cartHeadingActive").addClass('d-inline-flex');
        $("#cartHeadingInactive").removeClass('d-inline-flex');
        $("#cartHeadingInactive").addClass('d-none');
        //Show cards pane
        $("#receiptsContainer").removeClass('d-block');
        $("#receiptsContainer").addClass('d-none');
        $("#cartContainer").addClass('d-block');
        $("#cartContainer").removeClass('d-none');
    }

    _handleFoodFilter(){
        this.props.updateFilter("Food");
        $("#filterFood").addClass('DarkGreen');
        $("#filterDesserts").removeClass('DarkGreen');
        $("#filterDrinks").removeClass('DarkGreen');
      }

    _handleDessertsFilter(){
        this.props.updateFilter("Desserts");
        $("#filterFood").removeClass('DarkGreen');
        $("#filterDesserts").addClass('DarkGreen');
        $("#filterDrinks").removeClass('DarkGreen');
    }  

    _handleDrinksFilter(){
        this.props.updateFilter("Drinks");
        $("#filterFood").removeClass('DarkGreen');
        $("#filterDesserts").removeClass('DarkGreen');
        $("#filterDrinks").addClass('DarkGreen');
    }  

    _handleLogout() {
        sessionStorage.clear();
        this.props.logOut();
      }

    render() {
        const user = sessionStorage.getItem('userName');
        const role = sessionStorage.getItem('userRole');
        console.log(role);
        const loggedIn = this.props.loginStatus;
        let view;
        let view2;
        let view3;
        let view4;
        let view5;
        let view6;

        if (user == null) {
            view = 
                <li className="nav-item navHamburgerItem" role="presentation"><a className="nav-link hamburgerNavLink" href="#" data-toggle="modal" data-target="#loginModal">Log in</a></li>
            view2 =     
                <li className="nav-item navHamburgerItem" role="presentation"><a className="nav-link hamburgerNavLink" href="#" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
        } else {
            view = 
            <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons greenIcon" style={{marginTop: '15px',paddingRight: '5px'}}>account_circle</i>{sessionStorage.getItem('userName')}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{textAlign:'center',width: '100px', border:"none", boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}}>
                  <li className="nav-item" role="presentation"><a className="nav-link hamburgerNavLink" onClick={this._handleLogout}>log out</a></li>
                  </div>
                </li>
        }

        if (loggedIn == true) {
            view3 = 
            <div className="col d-none justify-content-xl-center cartHeadingCol" id="receiptsHeadingActive"><img src="assets/img/qr-code2.svg" className="receiptImgOrange"></img>
            <p className="cartHeadingTxt">Receipts</p>
            </div>
            view4 =
            <div className="col d-inline-flex justify-content-xl-center cartHeadingCol" id="receiptsHeadingInactive" onClick={this._handleToReceiptsChange}><img src="assets/img/qr-code11.svg" className="receiptImgOrange"></img>
                <p className="cartHeadingTxt InactiveTxt">Receipts <span className="badge badge-pill badge-dark">{this.props.badge}</span></p>
            </div>
        }

        if (role == 1 || role == 2) {
            view5 = 
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{width: '180px', border:"none", boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}}>
                    <Link to={`/billing`} className="dropdown-item"><i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>credit_card</i>Billing</Link>
                </div>
            </li>
        }

        if (role == 2) {
            view5 = 
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Admin
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{width: '180px', border:"none", boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}}>
                <Link to={`/billing`} className="dropdown-item"><i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>credit_card</i>Billing</Link>
                <Link to={`/dashboard`} className="dropdown-item"><i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>show_chart</i>Dashboard</Link>
            </div>
            </li>
        }

        return (
        <div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
            {/*top Nav*/}
            <nav className="navbar navbar-light navbar-expand-md fixed-top navigation-clean">
                <div className="container"><a className="navbar-brand" href="#"><img className="d-none d-md-block navLogo" src="assets/img/Frame.svg" width="200px"></img><h4 className="text-uppercase d-md-none">Menu</h4></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div
                        className="collapse navbar-collapse navCollapseCol" id="navcol-1">
                        <ul className="nav navbar-nav text-uppercase ml-auto">
                        {view5}
                            <li className="nav-item navHamburgerItem" role="presentation"><a className="nav-link d-md-none hamburgerNavLink" href="#">Home</a></li>
                            <li className="nav-item navHamburgerItem" role="presentation"><a className="nav-link active d-md-none hamburgerNavLink" href="#">Menu</a></li>
                            <li className="nav-item navHamburgerItem" role="presentation"><a className="nav-link d-md-none hamburgerNavLink" href="receipts.html">Receipts</a></li>
                            {view2}
                            {view}
                        </ul>
                </div>
                </div>
            </nav>
            <div className="container-fluid navBG"></div>
            {/*/top Nav*/}

            {/*bottom Nav*/}
            <div className="container mealTypeBar sticky-top">
                <div className="row rowNoMargin" style={{marginTop:'2px'}}>
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h4 className="d-none d-md-block navHeading">Menu</h4>
                            </div>
                            <div className="col-4 col-md-2 filterItem" onClick={this._handleFoodFilter}><img className="d-table filterIcon" src="assets/img/002-pita.svg"></img>
                                <p className="d-table DarkGreen filterItemCaption"id="filterFood">Food</p>
                            </div>
                            <div className="col-4 col-md-2 filterItem" id="filterDesserts" onClick={this._handleDessertsFilter}><img className="d-table filterIcon" src="assets/img/donut.svg"></img>
                                <p className="d-table filterItemCaption">Desserts</p>
                            </div>
                            <div className="col-4 col-md-2 filterItem" id="filterDrinks" onClick={this._handleDrinksFilter}><img className="d-table filterIcon" src="assets/img/006-coffee.svg"></img>
                                <p className="d-table filterItemCaption">Drinks</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 d-none d-lg-block">
                        <div className="row">
                            <div className="col d-inline-flex justify-content-xl-center cartHeadingCol" id="cartHeadingActive"><img src="assets/img/shopping-basket-7.svg" className="cartImgOrange"></img>
                                <p className="cartHeadingTxt">Basket</p>
                            </div>
                            <div className="col d-none justify-content-xl-center cartHeadingCol" id="cartHeadingInactive" onClick={this._handleToCartChange}><img src="assets/img/shopping-basket1.svg" className="cartImgOrange"></img>
                                <p className="cartHeadingTxt InactiveTxt">Basket</p>
                            </div>
                            {view3}
                            {view4}
                        </div>
                    </div>
                </div>
            </div>
            {/*/bottom Nav*/}
        </div>
        )
    }
}

export default Header