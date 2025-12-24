"use client"
import { HiOutlineUserGroup } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'
import { TfiMoney } from 'react-icons/tfi'
import { useSubscriptionStatsQuery } from '@/redux/features/subscription/subscriptionApi'

const SubscriptionsStats = () => {
    const { data: subscriptionStats, isLoading } = useSubscriptionStatsQuery(undefined);
    if (isLoading) {
        return (
            <div className="w-full border h-[170px] border-border-color rounded-xl p-5 bg-common flex items-center justify-center">
                <span className="text-gray-400">Loading...</span>
            </div>
        );
    }
    return (
        <div className='flex justify-between items-center gap-5 *:border *:border-border-color'>
            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Total Subscriber</h3>
                    <HiOutlineUserGroup />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>{subscriptionStats?.stats?.total_subscribers}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.stats?.growth_percentage}% from last month</p>
                </div>
            </div>

            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Active Subscriber</h3>
                    <LuEye />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>{subscriptionStats?.stats?.active_subscribers}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.stats?.growth_percentage}% from last month</p>
                </div>
            </div>

            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Total Earning</h3>
                    <TfiMoney />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-[#3BDD56]'>${subscriptionStats?.stats?.total_earnings}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.stats?.growth_percentage}% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsStats
