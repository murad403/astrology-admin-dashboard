"use client"
import BackButton from "@/app/componensts/button/BackButton"
import { type SubmitHandler, useForm } from "react-hook-form"
import AdminHeader from "@/app/componensts/shared/AdminHeader"
import { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } from "@/redux/features/setting/settingApi"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false })
import "react-quill-new/dist/quill.snow.css"

type TInput = {
    privacy_policy: string
}

const EditTermsConditions = () => {
    const { handleSubmit, watch, setValue } = useForm<TInput>()
    const { data } = useGetPrivacyPolicyQuery(undefined)
    const [updatePrivacyPolicy, { isLoading }] = useUpdatePrivacyPolicyMutation()
    const router = useRouter()

    const editorContent = watch("privacy_policy") || data?.privacy_policy || ""

    const onSubmit: SubmitHandler<TInput> = async (inputData) => {
        try {
            await updatePrivacyPolicy({ privacy_policy: editorContent }).unwrap()
            toast("Updated privacy policy successfully")
            router.push("/settings/privacy-policy")
        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <div className="space-y-5 w-full">
            <AdminHeader title="Terms & Conditions" description="Update terms & conditions"></AdminHeader>
            <div>
                <BackButton text="Edit Terms & Conditions"></BackButton>
            </div>
            <div className="mt-3 w-full">
                <style>{`
                  .ql-container {
                    border: none !important;
                  }
                  .ql-toolbar {
                    border: none !important;
                    border-bottom: 1px solid #2D3554 !important;
                  }
                `}</style>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="border border-border-color w-full rounded-xl text-title bg-common overflow-hidden">
                        <ReactQuill
                            value={editorContent}
                            onChange={(content) => setValue("privacy_policy", content)}
                            theme="snow"
                            modules={{
                                toolbar: [
                                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                    ["bold", "italic", "underline", "strike"],
                                    ["blockquote", "code-block"],
                                    ["link"],
                                    ["clean"],
                                ],
                            }}
                            className="h-[400px]"
                        />
                    </div>
                    <div className="flex justify-end items-center mt-20">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? (
                                <span className="loading loading-spinner text-header"></span>
                            ) : (
                                <span className="text-header">Update</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTermsConditions