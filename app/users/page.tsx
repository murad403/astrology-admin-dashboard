import AdminHeader from '../componensts/shared/AdminHeader'
import UsersTable from './UsersTable'
import UserStats from './UserStats'

const Users = () => {
  return (
    <div className='space-y-5'>
      <AdminHeader title='User' description='Manage Your Restaurant User'></AdminHeader>
      <UserStats></UserStats>
      <UsersTable></UsersTable>
    </div>
  )
}

export default Users
