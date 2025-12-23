"use client";
import Image from 'next/image'
import logo from "../../public/logo.png"
import AdminHeader from '../componensts/shared/AdminHeader'
import { useGetNotificationsQuery } from '@/redux/features/notification/notificationApi';
import { TNotification } from '../types/notification.types';

const Notifications = () => {
  const { data, isLoading } = useGetNotificationsQuery(undefined);
  if (isLoading) {
    return <div className="flex justify-center w-full mt-20">
      <span className="loading loading-spinner text-header"></span>
    </div>
  }
  // console.log(data);
  return (
    <div className='space-y-5'>
      <AdminHeader title='Notification' description='Manage your notification here.'></AdminHeader>

      <div className='space-y-3'>
        {
          data?.results?.map((notification: TNotification) =>
            <div key={notification?.id} className='flex items-center gap-3 p-3 bg-common rounded-xl border border-border-color'>
              <Image src={logo} alt='logo' width={48} height={48} className='rounded-full'></Image>
              <div>
                <h3 className='font-semibold text-[17px] text-header'>{notification?.title || "New User Registered"}</h3>
                <p className='text-title text-[15px] font-medium'>{notification?.message}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Notifications
