import baseApi from "@/redux/api/api";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        userList: builder.query({
            query: () =>{
                return {
                    url: "/dashboard/users/",
                    method: "GET"
                }
            }
        }),

        userDetails: builder.query({
            query: (userId: number | undefined) =>{
                return {
                    url: `/dashboard/users/${userId}/`,
                    method: "GET"
                }
            }
        })

        
    })
})


export const {useUserListQuery, useUserDetailsQuery} = userApi;