import UsersTable from './UsersTable'
import UserStats from './UserStats'

const Users = () => {
  return (
    <div className='space-y-5'>
      <UserStats></UserStats>
      <UsersTable></UsersTable>
    </div>
  )
}

export default Users
