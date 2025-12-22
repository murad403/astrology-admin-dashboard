/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import FormHandler from '@/app/componensts/form/FormHandler'
import FormInput from '@/app/componensts/form/FormInput'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import BackButton from '@/app/componensts/button/BackButton'
import { useRouter } from 'next/navigation'
import { useVerifyEmailMutation } from '@/redux/features/auth/authApi'
import { toast } from 'react-toastify'
import { useAppDispatch } from '@/redux/hooks'
import { setUser } from '@/redux/features/auth/authSlice'

const ForgetPassword = () => {

  const router = useRouter();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const dispatch = useAppDispatch();

  const onsubmit = async (data: { email: string }) => {
    try {
      const result = await verifyEmail(data).unwrap();
      toast(result?.message);
      dispatch(setUser(result?.email))
      router.push("/auth/verify-otp");
    } catch (error: any) {
      toast(error?.details?.email);
    }
    // router.push('/auth/verify-otp');
  }


  const validation = {
    required: 'This field is required',
  }
  return (
    <div className="flex justify-center items-center">
      <div className="w-[540px] h-[463px] bg-common p-7 rounded-xl flex flex-col justify-between items-center">
        {/* logo */}
        <Image src={logo} alt="logo" width={500} height={500} className="size-[150px]"></Image>
        {/* back button */}
        <div className='flex w-full items-center'>
          <BackButton text='verify email'></BackButton>
        </div>
        {/* login form */}
        <div className="w-full">
          <FormHandler onSubmit={onsubmit}>
            <FormInput validation={validation} type="text" name="email" label="email" placeholder="Enter your email"></FormInput>
            <button type="submit" className="bg-main w-full text-header rounded-xl py-3 mt-7 cursor-pointer">
              {
                isLoading ? <span className="loading loading-spinner text-header"></span> : <span className="text-header">Verify</span>
              }
            </button>
          </FormHandler>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
