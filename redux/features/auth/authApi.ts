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
        }),
        verifyEmail: builder.mutation({
            query: (data) =>{
                return {
                    url: "/forgot-password/request/",
                    method: "POST",
                    body: data
                }
            }
        }),
        verifyOtp: builder.mutation({
            query: (data) =>{
                return {
                    url: "/forgot-password/verify-otp/",
                    method: "POST",
                    body: data
                }
            }
        }),
        changePassword: builder.mutation({
            query: (data) =>{
                return {
                    url: "/forgot-password/reset-password/",
                    method: "POST",
                    body: data
                }
            }
        }),
        resendOtp: builder.mutation({
            query: (data) =>{
                return {
                    url: "/forgot-password/resend-otp/",
                    method: "POST",
                    body: data
                }
            }
        }),
    })
})

export const {useSignInUserMutation, useProfileQuery, useVerifyEmailMutation, useVerifyOtpMutation, useChangePasswordMutation, useResendOtpMutation} = authApi;