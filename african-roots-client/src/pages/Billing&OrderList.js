// Billing & Ordering Page

import React from 'react'
import AdminNav from '../components/AdminUI/adminNav';
import NewOrderTab from '../components/AdminUI/Billing&OrderList/NewOrderTab';
import OrderListTab from '../components/AdminUI/Billing&OrderList/OrderListTab';

class BillingPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this._getOrderData = this._getOrderData.bind(this);
        this._logOut = this._logOut.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('userRole') != 1 && sessionStorage.getItem('userRole') != 2){
            this.props.history.push('/') 
        }
    }

    _logOut() {
        this.props.history.push('/')
    }
    
    _getOrderData(){
        this.refs.order._getOrderData();
    }

    render() {
        return (
            <div>
                {/* admin nav */}
                <AdminNav logOut={this._logOut}/>
                {/* /admin nav */}
                <div className="container bodyContainer">
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1">New Order</a></li>
                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-2">Order List</a></li>
                        </ul>
                        <div className="tab-content">
                            {/* New Order Tab */}
                            < NewOrderTab getOrderData={this._getOrderData}/>
                            {/* /New Order Tab */}

                            {/* Order List Tab */}
                            < OrderListTab ref="order"/>
                            {/* /Order List Tab */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingPage