/* eslint-disable react-hooks/incompatible-library */
"use client"
import BackButton from '@/app/componensts/button/BackButton'
import Image from 'next/image'
import React, { useState } from 'react'
import profileImage from "@/public/admin.png"
import { BiEdit } from 'react-icons/bi'
import { SubmitHandler, useForm } from 'react-hook-form';
import { TbCameraPlus } from 'react-icons/tb';
import AdminHeader from '@/app/componensts/shared/AdminHeader';
import { useProfileQuery } from '@/redux/features/auth/authApi'
import { useUpdateProfileInformationMutation } from '@/redux/features/setting/settingApi'

type TInputs = {
    name: string;
    email: string;
    profile_picture: string;
}


const PersonalInformation = () => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const {data} = useProfileQuery(undefined);
    const { register, handleSubmit, watch  } = useForm<TInputs>();
    const [updateProfileInformation, {isLoading}] = useUpdateProfileInformationMutation();
    
    // const profile_picture = watch('profile_picture')?.[0];
    // console.log(data?.id)
    
    const onSubmit: SubmitHandler<TInputs> = async() => {
        const name = watch("name");
        const profile_picture = watch("profile_picture")?.[0];
        const updatedData = {
            name, profile: {
                profile_picture
            }
        }

        try {
            const result = await updateProfileInformation({userId: data?.id, updatedData}).unwrap();
            console.log(result);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='space-y-5'>
            <AdminHeader title='Personal information' description='Update your information'></AdminHeader>
            <div className='flex justify-between items-center mb-3'>
                <BackButton text='Personal Information'></BackButton>
                <button onClick={() => setIsEdit(true)} className={`text-header bg-common ${isEdit ? "hidden" : "flex"} items-center gap-2 rounded-xl py-2 px-4 cursor-pointer border border-border-color`}>
                    <BiEdit />
                    <span>Edit Profile</span>
                </button>
            </div>
            <div className='flex gap-10 items-center'>
                <div className='w-1/3 h-[360px] rounded-xl bg-common border border-border-color flex items-center flex-col gap-4 justify-center'>
                    <div className='relative'>
                        <Image src={profileImage} alt='profile image' width={140} height={140} className='rounded-full'></Image>
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isEdit ? "block" : "hidden"}`}>
                            <label htmlFor="photo" className='text-header text-2xl'>
                                <TbCameraPlus />
                            </label>
                            <input className='hidden' id='photo' {...register("profile_picture")} type="file" />
                        </div>
                    </div>
                    <p className='text-lg text-title'>Profile</p>
                    <h3 className='font-medium text-2xl text-header'>Admin</h3>
                </div>
                <div className='w-2/3'>
                    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-header font-semibold text-[16px] mb-2 capitalize">Name</label>
                            <input defaultValue={data?.name} disabled={!isEdit} {...register("name")} className='py-3 text-title px-4 outline-none border border-border-color rounded-xl appearance-none w-full' type="text" />
                        </div>
                        <div>
                            <label className="block text-header font-semibold text-[16px] mb-2 capitalize">Email</label>
                            <input {...register("email")} disabled className='py-3 text-title px-4 outline-none border border-border-color rounded-xl appearance-none w-full' type="email" defaultValue={data?.email} />
                        </div>
                        <button type='submit' className={`bg-main text-header py-3 w-full rounded-lg cursor-pointer text-center ${isEdit ? "block" : "hidden"}`}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation
