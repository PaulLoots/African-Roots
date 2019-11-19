//Admin Nav

import React from 'react'
import { Link } from 'react-router-dom'

class AdminNav extends React.PureComponent {
  constructor(props) {
      super(props);
      this._handleLogout = this._handleLogout.bind(this);
    }

  _handleLogout() {
    sessionStorage.clear();
    this.props.logOut();
  }

  render() {
    const role = sessionStorage.getItem('userRole');
    let view5;
    let view6;

    if (role == 1 || role == 2) {
        view5 = 
        <Link to={`/billing`} className="dropdown-item">Billing<i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>credit_card</i></Link>
    }

    if (role == 2) {
        view6 = 
        <Link to={`/dashboard`} className="dropdown-item">Dashboard<i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>show_chart</i></Link>
    }
    return (  
      <div>
      <nav className="navbar navbar-light navbar-expand-md fixed-top navigation-clean">
        <div className="container"><a className="navbar-brand" href="#"><img className="d-none d-md-block navLogo" src="assets/img/Frame.svg" width="200px"></img><h4 className="text-uppercase d-md-none">login</h4></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse navCollapseCol" id="navcol-1">
                <ul className="nav navbar-nav text-uppercase ml-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{width: '180px', border:"none", boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}}>
                  <Link to={`/menu`} className="dropdown-item"><i class="material-icons float-right d-lg-flex greenIcon" style={{marginTop: '5px'}}>restaurant_menu</i>Menu</Link>
                    {view5}
                    {view6}
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons greenIcon" style={{marginTop: '15px',paddingRight: '5px'}}>account_circle</i>{sessionStorage.getItem('userName')}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{textAlign:'center',width: '100px', border:"none", boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}}>
                  <li className="nav-item" role="presentation"><a className="nav-link hamburgerNavLink" onClick={this._handleLogout}>log out</a></li>
                  </div>
                </li>
                </ul>
          </div>
        </div>
      </nav>
      <div className="background backgroundTabs" style={{backgroundSize: '200px', backgroundImage: 'url(assets/img/Asset%203.svg)'}}></div>
      </div>
        );
    }
}    

export default AdminNav