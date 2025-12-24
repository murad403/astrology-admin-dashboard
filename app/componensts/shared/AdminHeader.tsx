"use client";
import Image from "next/image";
import admin from "@/public/admin.png";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import Link from "next/link";

type TProps = {
  title: string;
  description: string;
}

const AdminHeader = ({ title, description }: TProps) => {
  const { data } = useProfileQuery(undefined);
  // console.log("profile data", data);
  return (
    <div className='bg-common p-5 rounded-xl flex justify-between items-center border border-border-color-color'>
      <div>
        <h2 className='font-semibold text-[28px] text-header'>{title}</h2>
        <p className='text-[16px] font-medium text-title'>{description}</p>
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/settings/personal-information"}>
          <Image src={data?.profile?.profile_picture_url || admin} alt="admin image" width={500} height={500} className="rounded-full size-[60px]"></Image>
        </Link>
        <div>
          <h3 className='font-semibold text-xl text-header capitalize'>{data?.name}</h3>
          <p className='font-medium text-title text-[16px] capitalize'>admin</p>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
