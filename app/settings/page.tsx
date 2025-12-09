import React from 'react'
import adminSettings from '../libs/AdminSettings'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import AdminHeader from '../componensts/shared/AdminHeader'

const Settings = () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='Settings' description='Manage your profile settings'></AdminHeader>

      <div className='space-y-4'>
        {
          adminSettings.map(item =>
            <Link className='flex justify-between items-center text-header bg-common border border-border-color p-4 rounded-xl font-medium' href={item?.route} key={item.pathName}>
              <span>{item?.pathName}</span>
              <IoIosArrowForward />
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Settings
