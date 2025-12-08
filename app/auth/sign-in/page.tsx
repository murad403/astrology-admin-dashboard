/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import FormHandler from "@/app/componensts/form/FormHandler";
import FormInput from "@/app/componensts/form/FormInput";
import { saveToken } from "@/app/utils/auth";
import { useSignInUserMutation } from "@/redux/features/auth/authApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";

type TSignIn = {
    email: string;
    password: string;
}

const SignIn = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const[signInUser, {isLoading}] = useSignInUserMutation();


    const onsubmit = async(data: TSignIn) => {
        try {
            const result = await signInUser(data).unwrap();
            await saveToken(result.tokens.access, result.tokens.access);
            router.push('/');
            toast(result?.message);
        } catch (error: any) {
            // console.log(error.data.non_field_errors[0]);
            toast(error?.data?.non_field_errors?.[0]);
        }
        
    }


    const emailValidation = {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        }
    }
    const passwordValidation = {
        required: 'Password is required',
    }   
    return (
        <div className="flex justify-center items-center">
            <div className="w-[540px] h-[624px] bg-common p-7 rounded-xl flex flex-col justify-between items-center">
                {/* logo */}
                <div className="size-[150px] rounded-full bg-gray-300 flex items-center justify-center">
                    <Image 
                        src="/logo.png" 
                        alt="logo" 
                        width={150} 
                        height={150} 
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
                {/* form heading */}
                <div className="text-center space-y-2">
                    <h2 className="font-semibold text-2xl text-header">Welcome Back Admin!</h2>
                    <p className="text-sm font-medium text-title">Sign in on your account</p>
                </div>
                {/* login form */}
                <div className="w-full">
                    <FormHandler onSubmit={onsubmit}>
                    <FormInput type="text" name="email" label="email" placeholder="Enter your email" validation={emailValidation}></FormInput>
                    <div className="relative">
                        <FormInput label="Password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" validation={passwordValidation}></FormInput>
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute top-12 text-xl right-5 text-title">
                            {
                                showPassword ? <LuEye /> : <LuEyeOff />
                            }
                        </div>
                    </div>
                    <div className="flex justify-end items-center text-[#DF2421]">
                        <Link href={"/auth/forget-password"} className="text-sm font-medium">Forget Password?</Link>
                    </div>
                    <button type="submit" className="bg-main w-full rounded-xl py-3 mt-7 cursor-pointer">
                        {
                            isLoading ? <span className="loading loading-spinner text-header"></span> : <span className="text-header">Log in</span>
                        }
                    </button>
                </FormHandler>
                </div>
            </div>
        </div>
    )
}

export default SignIn
