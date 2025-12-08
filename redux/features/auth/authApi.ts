import baseApi from "@/redux/api/api";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signInUser: builder.mutation({
            query: (data) =>{
                return {
                    url: "/dashboard/login/",
                    method: "POST",
                    body: data
                }
            }
        }),
        profile: builder.query({
            query: () =>{
                return {
                    url: '/profile/',
                    method: "GET",
                }
            },
            providesTags: ["auth"]
        })
    })
})

export const {useSignInUserMutation, useProfileQuery} = authApi;