import React from 'react'
import SubscriptionsStats from './SubscriptionsStats'
import SubscriptionPlan from './SubscriptionPlan'
import Subscriber from './Subscriber'

const Subscriptions = () => {
  return (
    <div className='space-y-5'>
      <SubscriptionsStats></SubscriptionsStats>
      <SubscriptionPlan></SubscriptionPlan>
      <Subscriber></Subscriber>
    </div>
  )
}

export default Subscriptions
