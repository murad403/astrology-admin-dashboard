import baseApi from "@/redux/api/api";

const settingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        adminChangePassword: builder.mutation({
            query: (data) => {
                return {
                    url: "/change-password/",
                    method: "POST",
                    body: data
                }
            }
        }),
        getPrivacyPolicy: builder.query({
            query: () => {
                return {
                    url: "/dashboard/privacy-policy/1/",
                    method: "GET"
                }
            },
            providesTags: ["settings"]
        }),
        updatePrivacyPolicy: builder.mutation({
            query: (data) => {
                return {
                    url: "/dashboard/privacy-policy/1/update/",
                    method: "PUT",
                    body: data
                }
            },
            invalidatesTags: ["settings"]
        }),
        updateProfileInformation: builder.mutation({
            query: (data) => {
                return {
                    url: `/profile/`,
                    method: "PATCH",
                    body: data,
                    formData: true
                }
            },
            invalidatesTags: ["settings"]
        })
    })
})

export const { useAdminChangePasswordMutation, useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation, useUpdateProfileInformationMutation } = settingsApi;