import AreaChart from './componensts/dashboard/AreaChart'
import { ChartGenerate } from './componensts/dashboard/ChartGenerate'
import AdminHeader from './componensts/shared/AdminHeader'
import UsersTable from './users/UsersTable'

const page = async () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='Admin Dashboard' description='Manage the entire astrology platform with full control and clarity.'></AdminHeader>
      <div className='text-header flex gap-5'>
        <div className='w-2/3'>
          <AreaChart></AreaChart>
        </div>
        <div className='w-1/3'>
          <ChartGenerate></ChartGenerate>
        </div>
      </div>
      <div>
        <UsersTable></UsersTable>
      </div>
    </div>
  )
}

export default page
