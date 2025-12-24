"use client"
import BackButton from '@/app/componensts/button/BackButton'
import AdminHeader from '@/app/componensts/shared/AdminHeader'
import { useGetPrivacyPolicyQuery } from '@/redux/features/setting/settingApi'
import Link from 'next/link'

const PrivacyPolicy = () => {
  const { data } = useGetPrivacyPolicyQuery(undefined);
  
  return (
    <div className='space-y-5'>
      <AdminHeader title='Terms & Conditions' description='Edit terms & conditions'></AdminHeader>
      <div>
        <BackButton text='Terms & Conditions'></BackButton>
      </div>
      <div className='mt-3'>
        <p className='text-[16px] text-title whitespace-pre-wrap'>{data?.privacy_policy}</p>
      </div>
      <div className='flex justify-end items-center mt-5'>
        <Link href={'/settings/privacy-policy/edit-terms-conditions'} className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center`}>Edit</Link>
      </div>
    </div>
  )
}

export default PrivacyPolicy