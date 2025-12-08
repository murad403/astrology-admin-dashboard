import AreaChart from './componensts/dashboard/AreaChart'
import { ChartGenerate } from './componensts/dashboard/ChartGenerate'
import UsersTable from './users/UsersTable'

const page = async () => {
  return (
    <div>
      <div className='text-header space-y-5 flex gap-5'>
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
