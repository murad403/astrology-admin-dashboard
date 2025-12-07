import Image from "next/image";
import admin from "../../../public/admin.jpg";

const AdminHeader = () => {
  return (
    <div className='bg-common p-5 rounded-xl flex justify-between items-center border border-border-color-color'>
      <div>
        <h2 className='font-semibold text-[28px] text-header'>Admin Dashboard</h2>
        <p className='text-[16px] font-medium text-title'>Manage the entire astrology platform with full control and clarity.</p>
      </div>
      <div className="flex items-center gap-5">
        <Image src={admin} alt="admin image" width={60} height={60} className="rounded-full"></Image>
        <div>
            <h3 className='font-semibold text-xl text-header'>Rahik Ahsan</h3>
            <p className='font-medium text-title text-[16px]'>Admin</p>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
