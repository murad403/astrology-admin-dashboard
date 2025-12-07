import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png"

const Notifications = () => {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-3 p-3 bg-common rounded-xl border border-border-color'>
        <Image src={logo} alt='logo' width={48} height={48} className='rounded-full'></Image>
        <div>
          <h3 className='font-semibold text-[17px] text-header'>New User Registered</h3>
          <p className='text-title text-[15px] font-medium'>A new user has joined the platform.</p>
        </div>
      </div>
      <div className='flex items-center gap-3 p-3 bg-common rounded-xl border border-border-color'>
        <Image src={logo} alt='logo' width={48} height={48} className='rounded-full'></Image>
        <div>
          <h3 className='font-semibold text-[18px] text-header'>New User Registered</h3>
          <p className='text-title text-[16px] font-medium'>A new user has joined the platform.</p>
        </div>
      </div>
    </div>
  )
}

export default Notifications
