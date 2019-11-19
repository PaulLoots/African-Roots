// Billing & Ordering Page

import React from 'react'
import AdminNav from '../components/AdminUI/adminNav';
import Dashboard from '../components/AdminUI/AdminDashboard/Dashboard';
import Inventory from '../components/AdminUI/Inventory/inventory';
import UsersTab from '../components/AdminUI/AdminUsers/UsersTab';

class DashboardInventory extends React.PureComponent {
    constructor(props) {
        super(props);
        this._logOut = this._logOut.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('userRole') != 2){
            this.props.history.push('/') 
        }
    }

    _logOut() {
        this.props.history.push('/')
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
                            <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1">Insights</a></li>
                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-2">Inventory</a></li>
                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-3">Users</a></li>
                        </ul>
                        <div className="tab-content">
                            < Dashboard />

                            < Inventory />

                            < UsersTab />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardInventory