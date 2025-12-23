/* eslint-disable @typescript-eslint/no-explicit-any */
export type TSubscriber = {
  id: number
  name: string
  email: string
  profile_picture: any
  subscription_type: string
  purchase_date: string
  expire_date: string
  status: string
}

export type TSubscriptionPlan = {
  id: number
  name: string
  price: string
  chart_limit: number
  has_ai_interpretation: boolean
  has_transit_support: boolean
  has_synastry_support: boolean
  ai_word_limit: number
  is_active: boolean
  is_default: boolean
  description: string
  subscriber_count: number
}

export type TSubscriptionStats = {
  total_subscribers: number
  active_subscribers: number
  total_earnings: number
  growth_percentage: number
}
