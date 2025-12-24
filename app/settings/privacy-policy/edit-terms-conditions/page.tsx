"use client"
import BackButton from '@/app/componensts/button/BackButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import AdminHeader from '@/app/componensts/shared/AdminHeader'
import { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } from '@/redux/features/setting/settingApi'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

type TInput = {
    privacy_policy: string;
}

const EditTermsConditions = () => {
    const { register, handleSubmit } = useForm<TInput>();
    const { data } = useGetPrivacyPolicyQuery(undefined);
    const [updatePrivacyPolicy, {isLoading}] = useUpdatePrivacyPolicyMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<TInput> = async(data) => {
        try {
            await updatePrivacyPolicy(data).unwrap();
            toast("Updated privacy policy successfully");
            router.push("/settings")
        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <div className='space-y-5'>
            <AdminHeader title='Terms & Conditions' description='Update terms & conditions'></AdminHeader>
            <div>
                <BackButton text='Edit Terms & Conditions'></BackButton>
            </div>
            <div className='mt-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='border w-full border-border-color rounded-xl bg-common'>
                        <textarea 
                            {...register("privacy_policy")} 
                            defaultValue={data?.privacy_policy} 
                            className='w-full text-title appearance-none min-h-[400px] outline-none p-5 resize-y'
                        ></textarea>
                    </div>
                    <div className='flex justify-end items-center mt-5'>
                        <button type='submit' className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center`}>
                        {
                            isLoading ? <span className="loading loading-spinner text-header"></span> : <span className="text-header">Update</span>
                        }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTermsConditions