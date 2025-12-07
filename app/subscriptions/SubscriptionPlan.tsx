import React from 'react'

const SubscriptionPlan = () => {
    return (
        <div className='bg-common border border-border-color p-5 rounded-xl '>
            <h2 className='mb-5 font-bold text-2xl text-header'>Subscription Plans</h2>
            <div className='grid grid-cols-2 gap-5'>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-xl'>Standard</h3>
                        <p className='text-title text-[16px] font-medium'>$19.99/month</p>
                    </div>
                    <h3 className='bg-slate-600 py-2 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-xl'>Premium</h3>
                        <p className='text-title text-[16px] font-medium'>$19.99/month</p>
                    </div>
                    <h3 className='bg-slate-600 py-2 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
                <div className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                    <div>
                        <h3 className='text-header font-semibold text-xl'>Platinum</h3>
                        <p className='text-title text-[16px] font-medium'>$19.99/month</p>
                    </div>
                    <h3 className='bg-slate-600 py-2 px-5 text-[16px] rounded-xl text-header'>1,545 subscribers</h3>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlan
