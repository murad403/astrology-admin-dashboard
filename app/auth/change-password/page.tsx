"use client"
import BackButton from '@/app/componensts/button/BackButton'
import FormHandler from '@/app/componensts/form/FormHandler'
import FormInput from '@/app/componensts/form/FormInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

type TChangePassword = {
    newPassword: string;
    confirmNewPassword: string;
}

const ChangePassword = () => {
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);
    const router = useRouter();
    const onsubmit = (data: TChangePassword) => {
        console.log(data);
        router.push("/")
    }
    
    const passwordValidation = {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
        }
    }
    
    return (
        <div className="flex justify-center items-center">
            <div className="w-[586px] h-[516px] bg-common p-[60px] rounded-xl flex flex-col items-center gap-[30px]">
                <div className='flex w-full flex-col'>
                    <BackButton text='change password'></BackButton>
                    <p className='font-medium text-[16px] text-title mt-4'>Your password must be 8-10 character long.</p>
                </div>
                <div className="w-full">
                    <FormHandler onSubmit={onsubmit}>
                        <div className="relative mb-5">
                            <FormInput label="New Password" name="newPassword" type={showNewPassword ? "text" : "password"} placeholder="Set new password" validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowNewPassword(!showNewPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showNewPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <div className="relative">
                            <FormInput label="Confirm New Password" name="confirmNewPassword" type={showConfirmNewPassword ? "text" : "password"} placeholder="Re-enter new password" validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showConfirmNewPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <button type="submit" className="bg-main w-full text-header rounded-xl py-3 mt-7 cursor-pointer">Save</button>
                    </FormHandler>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
