import React from 'react'
import getLoggedCustomer  from '../../service/AuthenticationService'

const CustomerDashboardComponent = () => {
    const currentCustomer = getLoggedCustomer();
  return (
    <div>
        <h1>{currentCustomer.name}</h1>
        <h1>{currentCustomer.email}</h1>
        <h1>{currentCustomer.password}</h1>
        {currentCustomer.orders.map((order, index) => <li key={index}>{`date - ${order.date} customer - ${order.customer} medicine - ${order.medicine}`}</li>)}
    </div>
  )
}

export default CustomerDashboardComponent