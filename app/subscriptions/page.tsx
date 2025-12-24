import SubscriptionsStats from './SubscriptionsStats'
import SubscriptionPlan from './SubscriptionPlan'
import Subscriber from './Subscriber'
import AdminHeader from '../componensts/shared/AdminHeader'

const Subscriptions = () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='Subscriber Management' description='Manage the entire Subscriber Management'></AdminHeader>
      <SubscriptionsStats></SubscriptionsStats>
      <SubscriptionPlan></SubscriptionPlan>
      <Subscriber></Subscriber>
    </div>
  )
}

export default Subscriptions
