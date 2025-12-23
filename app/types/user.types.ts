/* eslint-disable @typescript-eslint/no-explicit-any */

export type TUser = {
  id: number
  name: string
  email: string
  date_of_birth: string
  birth_country: string
  time_of_birth: string
  birth_city: string
  profile_picture: any
  is_active: boolean
  is_verified: boolean
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
