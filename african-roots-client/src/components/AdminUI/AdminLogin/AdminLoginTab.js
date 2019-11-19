//Tab for Admin login

import React from 'react'
import EmployeeLoginItem from './EmployeeLoginItem';

const AdminLoginTab = () => (
  <div className="tab-pane active" role="tabpanel" id="tab-1">
      <div className="row">
          {/* employee item */}
          <EmployeeLoginItem />
          {/* /employee item */}
      </div>
  </div>

)

export default AdminLoginTab