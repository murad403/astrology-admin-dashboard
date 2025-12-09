"use client"
import BackButton from '@/app/componensts/button/BackButton'
import FormHandler from '@/app/componensts/form/FormHandler'
import FormInput from '@/app/componensts/form/FormInput'
import AdminHeader from '@/app/componensts/shared/AdminHeader'
import React, { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

type TChangePassword = {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);
    const passwordValidation = {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
        }
    }
    const onsubmit = (data: TChangePassword) => {
        console.log(data);
    }

    return (
        <div className='space-y-5'>
            <AdminHeader title='Change password' description='Change your password'></AdminHeader>

            <div className='bg-common p-[60px] rounded-xl border border-border-color'>
                <div>
                    <BackButton text='Change Password'></BackButton>
                    <p className='font-medium text-[16px] text-title'>Your password must be 8-10 character long.</p>
                </div>
                <div className='mt-5'>
                    <FormHandler onSubmit={onsubmit}>
                        <div className="relative mb-5">
                            <FormInput label="Enter Current Password" name="currentPassword" type={showCurrentPassword ? "text" : "password"} placeholder="Enter current password" validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showCurrentPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <div className="relative mb-5">
                            <FormInput label="Enter New Password" name="newPassword" type={showNewPassword ? "text" : "password"} placeholder="Enter new password" validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowNewPassword(!showNewPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showNewPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <div className="relative mb-5">
                            <FormInput label="Confirm New Password" name="confirmNewPassword" type={showConfirmNewPassword ? "text" : "password"} placeholder="Re-enter new password " validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showConfirmNewPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <button type="submit" className="bg-main w-full text-header rounded-xl py-3 cursor-pointer">Save</button>
                    </FormHandler>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
