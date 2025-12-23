"use client";
import { useUserListQuery } from '@/redux/features/user/userApi';
import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { TUser } from '../types/user.types';

const UserStats = () => {
    const { data, isLoading } = useUserListQuery(undefined);
    const activeUser = data?.users?.filter((user: TUser) => user.is_active == true);
    // console.log(activeUser?.length);
    return (
        <div className='flex justify-between items-center gap-5 *:border *:border-border-color'>
            <div className='rounded-xl p-5 bg-common w-1/2 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Total Users</h3>
                    <HiOutlineUserGroup />
                </div>
                <div>
                <h2 className='font-medium text-3xl text-header'>{data?.count}</h2>
                    <p className='text-title font-medium text-[16px]'>+12% from last month</p>
                </div>
            </div>
            <div className='rounded-xl p-5 bg-common w-1/2 space-y-8'>
                <div className='text-header font-semibold text-[20px] flex justify-between items-center'>
                    <h3>Active User</h3>
                    <HiOutlineUserGroup />
                </div>
                <div>
                <h2 className='font-medium text-3xl text-header'>{activeUser?.length}</h2>
                    <p className='text-title font-medium text-[16px]'>+12% from last month</p>
                </div>
            </div>
        </div>
    )
}

export default UserStats
