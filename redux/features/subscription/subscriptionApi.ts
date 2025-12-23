import baseApi from "@/redux/api/api";

const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        subscriberList: builder.query({
            query: () =>{
                return {
                    url: "/dashboard/subscribers/",
                    method: "GET"
                }
            },
            providesTags: ["subscription"]
        }),
        subscriptionPlans: builder.query({
            query: () =>{
                return {
                    url: "/dashboard/plans/",
                    method: "GET"
                }
            }
        }),
        subscriptionStats: builder.query({
            query: () => {
                return {
                    url: "/dashboard/subscriber-stats/",
                    method: "GET"
                }
            }
        }),
        updateSubscription: builder.mutation({
            query: (data) =>{
                console.log("api data", data);
                return {
                    url: `/dashboard/subscribers/${data.userId}/update/`,
                    method: "PATCH",
                    body: data?.updatedData
                }
            },
            invalidatesTags: ["subscription"]
        })
    })
})


export const {useSubscriberListQuery, useSubscriptionPlansQuery, useSubscriptionStatsQuery, useUpdateSubscriptionMutation} = subscriptionApi;