import React from 'react'
import adminSettings from '../libs/AdminSettings'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const Settings = () => {
  return (
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
  )
}

export default Settings
