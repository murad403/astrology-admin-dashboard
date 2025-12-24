"use client"
import { useSubscriptionPlansQuery } from "@/redux/features/subscription/subscriptionApi";
import { TSubscriptionPlan } from "../types/subscription.types";

const SubscriptionPlan = () => {
    const { data: subscriptionPlans, isLoading } = useSubscriptionPlansQuery(undefined);
    if (isLoading) {
        return (
            <div className="w-full border h-[170px] border-border-color rounded-xl p-5 bg-common flex items-center justify-center">
                <span className="text-gray-400">Loading...</span>
            </div>
        );
    }
    return (
        <div className='bg-common border border-border-color p-5 rounded-xl '>
            <h2 className='mb-5 font-bold text-2xl text-header'>Subscription Plans</h2>
            <div className='grid grid-cols-2 gap-5'>
                {
                    subscriptionPlans?.map((plan: TSubscriptionPlan) =>
                        <div key={plan?.id} className='border border-border-color p-5 rounded-xl flex justify-between items-center'>
                            <div>
                                <h3 className='text-header font-semibold text-xl capitalize'>{plan?.name}</h3>
                                <p className='text-title text-[16px] font-medium'>${plan?.price}/month</p>
                            </div>
                            <h3 className='bg-slate-600 py-2 px-5 text-[16px] rounded-xl text-header'>{plan?.subscriber_count} subscribers</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SubscriptionPlan
