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
        })
    })
})


export const {useUserListQuery} = userApi;