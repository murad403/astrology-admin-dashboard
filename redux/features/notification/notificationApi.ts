import baseApi from "@/redux/api/api"

const notificationApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getNotifications: builder.query({
            query: () =>{
                return {
                    url: "/notifications/",
                    method: "GET"
                }
            }
        })
    })
})

export const {useGetNotificationsQuery} = notificationApi;