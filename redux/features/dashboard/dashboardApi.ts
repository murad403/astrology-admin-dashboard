import baseApi from "@/redux/api/api";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        dashboard: builder.query({
            query: (filter) =>{
                // console.log(filter);
                return {
                    url: `/dashboard/stats/?period=${filter}`,
                    method: "GET"
                }
            }
        }),
    })
})


export const {useDashboardQuery} = dashboardApi;