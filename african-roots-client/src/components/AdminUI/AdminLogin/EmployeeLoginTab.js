//Tab for employee login

import React from 'react'
import EmployeeLoginItem from './EmployeeLoginItem';

const EmployeeLoginTab = () => (
  <div className="tab-pane" role="tabpanel" id="tab-2">
      <div className="row">
          {/* employee item */}
          <EmployeeLoginItem />
          {/* /employee item */}
      </div>
  </div>
)

export default EmployeeLoginTab