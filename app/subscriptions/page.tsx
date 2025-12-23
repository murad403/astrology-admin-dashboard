"use client"
import SubscriptionsStats from './SubscriptionsStats'
import SubscriptionPlan from './SubscriptionPlan'
import Subscriber from './Subscriber'
import AdminHeader from '../componensts/shared/AdminHeader'
import { useSubscriberListQuery, useSubscriptionPlansQuery, useSubscriptionStatsQuery } from '@/redux/features/subscription/subscriptionApi'

const Subscriptions = () => {
  const { data: subscriptionStats, isLoading: isSubscriptionStatusLoading } = useSubscriptionStatsQuery(undefined);
  const { data: subscriptionPlans, isLoading: isSubscriptionPlanLoading } = useSubscriptionPlansQuery(undefined);
  const { data: subscribers, isLoading: isSubscriberLoading } = useSubscriberListQuery(undefined);

  if (isSubscriptionStatusLoading || isSubscriptionPlanLoading || isSubscriberLoading) {
    return <div className="flex justify-center w-full mt-20">
      <span className="loading loading-spinner text-header"></span>
    </div>
  }
  return (
    <div className='space-y-5'>
      <AdminHeader title='Subscriber Management' description='Manage the entire Subscriber Management'></AdminHeader>
      <SubscriptionsStats subscriptionStats={subscriptionStats?.stats}></SubscriptionsStats>
      <SubscriptionPlan subscriptionPlans={subscriptionPlans}></SubscriptionPlan>
      <Subscriber subscribers={subscribers?.subscribers}></Subscriber>
    </div>
  )
}

export default Subscriptions
