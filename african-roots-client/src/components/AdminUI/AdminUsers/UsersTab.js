//Tab For Viewing a List of Orders

import React from 'react'
import axios from "axios";
import UserListItem from './UserListItem';

class UsersTab extends React.Component {
  constructor() {
      super();
      this.state = {userData: []};
      this._getUserData = this._getUserData.bind(this);
  }

  componentDidMount() {
    this._getUserData();
  }

  _getUserData() {
    let url = 'https://dev-african-roots.herokuapp.com/api/admin/users';
    return axios(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        credentials: 'same-origin',
      }).then(response => {
        this.setState({
          userData: response.data
        });
        console.log(this.state.userData);
      })
  }


  render() {
    return (
    <div className="tab-pane" role="tabpanel" id="tab-3">
      <div className="row">
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Customers</h5>
              {/* Pending Order List Item */}
              {this.__showCustomers()}
              {/* /Pending Order List Item */}
          </div>
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Employees</h5>
              {/* Paid Order List Item */}
              {this.__showEmployees()}
              {/* /Paid Order List Item */}
          </div>
          <div className="col-lg-4 OrderListCol" style={{height:"80vh", overflow:"scroll"}}>
              <h5>Admin</h5>
              {/* Served Order List Item */}
              {this.__showAdmin()}
              {/* /Served Order List Item */}
          </div>
      </div>
    </div>
    );
  }

  __showCustomers() {
    if (this.state.userData.length > 0) {
      return this.state.userData.map(user => {
        if(user.role == 0){
          return (
            <UserListItem
              key={user._id}
              id={user._id}
              name={user.name}
              email={user.email}
              type={0}
              getUserData={this._getUserData}
            />
          );
        };
      });
    } else {
      return null;
    }
  }

  __showEmployees() {
    if (this.state.userData.length > 0) {
      return this.state.userData.map(user => {
        if(user.role == 1){
          return (
            <UserListItem
              key={user._id}
              id={user._id}
              name={user.name}
              email={user.email}
              type={1}
              getUserData={this._getUserData}
            />
          );
        };
      });
    } else {
      return null;
    }
  }

  __showAdmin() {
    if (this.state.userData.length > 0) {
      return this.state.userData.map(user => {
        if(user.role == 2){
          return (
            <UserListItem
              key={user._id}
              id={user._id}
              name={user.name}
              email={user.email}
              type={2}
              getUserData={this._getUserData}
            />
          );
        };
      });
    } else {
      return null;
    }
  }

}

export default UsersTab