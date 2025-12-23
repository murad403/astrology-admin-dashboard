import { HiOutlineUserGroup } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'
import { TfiMoney } from 'react-icons/tfi'
import { TSubscriptionStats } from '../types/subscription.types'

const SubscriptionsStats = ({subscriptionStats}: {subscriptionStats: TSubscriptionStats}) => {
    
    return (
        <div className='flex justify-between items-center gap-5 *:border *:border-border-color'>
            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Total Subscriber</h3>
                    <HiOutlineUserGroup />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>{subscriptionStats?.total_subscribers}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.growth_percentage}% from last month</p>
                </div>
            </div>

            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Active Subscriber</h3>
                    <LuEye />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>{subscriptionStats?.active_subscribers}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.growth_percentage}% from last month</p>
                </div>
            </div>

            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Total Earning</h3>
                    <TfiMoney />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-[#3BDD56]'>${subscriptionStats?.total_earnings}</h2>
                    <p className='text-title font-medium text-[16px]'>+{subscriptionStats?.growth_percentage}% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsStats
