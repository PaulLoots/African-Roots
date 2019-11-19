import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from '../pages/Menu'
import AdminLogin from '../pages/AdminLogin'
import BillingPage from '../pages/Billing&OrderList';
import Intro from './ClientUI/Home/Intro';
import DashboardInventory from '../pages/Inventory&Dashboard';
import OrderQRScanner from './AdminUI/Billing&OrderList/OrderQRScanner';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Intro}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/adminlogin' component={AdminLogin}/>
      <Route path='/billing' component={BillingPage}/>
      <Route path='/dashboard' component={DashboardInventory}/>
      <Route path='/qr' component={OrderQRScanner}/>
    </Switch>
  </main>
)

export default Main