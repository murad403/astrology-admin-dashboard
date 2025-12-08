/* eslint-disable @typescript-eslint/no-explicit-any */

export type TUser = {
  id: number
  email: string
  name: string
  is_active: boolean
  is_staff: boolean
  is_verified: boolean
  date_joined: string
  profile: TProfile
}

export type TProfile = {
  id: number
  profile_picture: any
  date_of_birth: string
  time_of_birth: string
  birth_country: string
  birth_city: string
  created_at: string
  updated_at: string
  user: number
}
