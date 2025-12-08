import { createApi, DefinitionType, fetchBaseQuery, type BaseQueryApi, type BaseQueryFn, type FetchArgs } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import axios from "axios";

// base query-----------------------------------------------------------------------------------------------
// const baseQuery = fetchBaseQuery({
//     baseUrl: "your base url",
//     credentials: "include",
//     prepareHeaders: (headers, { getState }) => {
//         const token = (getState() as RootState).auth.accessToken;
//         if (token) {
//             headers.set('authorization', `Bearer ${token}`);
//         }
//         return headers;
//     }
// })


// custome base query------------------------------------------------------------------------------- 
// const baseQueryRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraoptions): Promise<any> => {
//     let result = await baseQuery(args, api, extraoptions);
//     console.log(result);
//     if (result.error?.status === 401) {
//         console.log("sending request for access token generate");
//         const res = await axios.post('/auth/resfresh-token-generate')
//         const data = await res.json()//after sending request----

//         if (data?.data.accessToken) {
//             const user = (api.getState() as RootState).auth.user;
//             api.dispatch(setUser({ user, accessToken: data?.accessToken }));
//             result = await baseQuery(args, api, extraoptions);
//         } else{
//             api.dispatch(logout());          //logout function from auth api------------------------------------------------
//         }
//     }
//     return result;
// }



const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({baseUrl: ""}),
    tagTypes: ["User"],
    endpoints: () => ({
        // addUser: builder.mutation({
        //     query: (data) =>{
        //         return {
        //             url: "/user",
        //             method: "POST",
        //             body: data
        //         }
        //     },
        //     invalidatesTags: ["User"]
        // })
    })
})


export default baseApi;