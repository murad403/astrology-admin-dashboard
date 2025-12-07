import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'
import { TfiMoney } from 'react-icons/tfi'

const SubscriptionsStats = () => {
    return (
        <div className='flex justify-between items-center gap-5 *:border *:border-border-color'>
            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex gap-24 items-center'>
                    <h3>Total Subscriber</h3>
                    <HiOutlineUserGroup />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>5,250</h2>
                    <p className='text-title font-medium text-[16px]'>+12% from last month</p>
                </div>
            </div>
            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex gap-24 items-center'>
                    <h3>Active Subscriber</h3>
                    <LuEye />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-header'>250</h2>
                    <p className='text-title font-medium text-[16px]'>+12% from last month</p>
                </div>
            </div>
            <div className='rounded-xl p-5 bg-common w-1/3 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex gap-24 items-center'>
                    <h3>Total Earning</h3>
                    <TfiMoney />
                </div>
                <div>
                    <h2 className='font-medium text-3xl text-[#3BDD56]'>$250</h2>
                    <p className='text-title font-medium text-[16px]'>+12% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionsStats
