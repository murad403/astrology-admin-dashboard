import baseApi from "@/redux/api/api";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        dashboard: builder.query({
            query: () =>{
                return {
                    url: "/dashboard/stats/",
                    method: "GET"
                }
            }
        }),
    })
})


export const {useDashboardQuery} = userApi;