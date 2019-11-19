// View Account Details

import React from 'react'
import AdminNav from '../components/AdminUI/adminNav';
import AdminLoginTab from '../components/AdminUI/AdminLogin/AdminLoginTab';
import EmployeeLoginTab from '../components/AdminUI/AdminLogin/EmployeeLoginTab';
import EmployeeLoginPasscode from '../components/AdminUI/AdminLogin/EmployeeLoginPasscode';


class AdminLogin extends React.PureComponent {
    render() {
        return (
            <div>
                {/* admin nav */}
                <AdminNav />
                {/* /admin nav */}
                <div className="container bodyContainer">
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1">Admin</a></li>
                            <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-2">Employees</a></li>
                        </ul>
                        <div className="tab-content">
                            {/* admin tab */}
                            <AdminLoginTab />
                            {/* /admin tab */}

                            {/* employee tab */}
                            <EmployeeLoginTab />
                            {/* /employee tab */}
                        </div>
                    </div>
                </div>
                {/* login passcode modal */}
                <EmployeeLoginPasscode />
                {/* /login passcode modal */}
            </div>
        )
    }
}

export default AdminLogin
