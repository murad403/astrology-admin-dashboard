"use client";
import Image from "next/image";
import admin from "@/public/admin.png";
import { useProfileQuery } from "@/redux/features/auth/authApi";

type TProps = {
  title: string;
  description: string;
}

const AdminHeader = ({title, description}: TProps) => {
  const {data} = useProfileQuery(undefined);
  // console.log("profile data", data);
  return (
    <div className='bg-common p-5 rounded-xl flex justify-between items-center border border-border-color-color'>
      <div>
        <h2 className='font-semibold text-[28px] text-header'>{title}</h2>
        <p className='text-[16px] font-medium text-title'>{description}</p>
      </div>
      <div className="flex items-center gap-5">
        <Image src={data?.profile?.profile_picture || admin} alt="admin image" width={60} height={60} className="rounded-full"></Image>
        <div>
            <h3 className='font-semibold text-xl text-header capitalize'>{data?.name}</h3>
            <p className='font-medium text-title text-[16px] capitalize'>admin</p>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
