"use client"
import FormHandler from '@/app/componensts/form/FormHandler'
import FormInput from '@/app/componensts/form/FormInput'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import BackButton from '@/app/componensts/button/BackButton'
import { useRouter } from 'next/navigation'

const ForgetPassword = () => {
  const router = useRouter();
  const onsubmit = (data: { email: string }) => {
    console.log(data);
    router.push('/auth/verify-otp');
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
            <button type="submit" className="bg-main w-full text-header rounded-xl py-3 mt-7 cursor-pointer">Verify</button>
          </FormHandler>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
