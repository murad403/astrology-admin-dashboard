import baseApi from "@/redux/api/api";

const settingsApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        changePassword: builder.mutation({
            query: (data) =>{
                return {
                    url: "/change-password/",
                    method: "POST",
                    body: data
                }
            }
        })
    })
})

export const {useChangePasswordMutation} = settingsApi;