"use client"
import BackButton from "@/app/componensts/button/BackButton"
import AdminHeader from "@/app/componensts/shared/AdminHeader"
import { useGetPrivacyPolicyQuery } from "@/redux/features/setting/settingApi"
import Link from "next/link"
import "react-quill-new/dist/quill.snow.css"

const PrivacyPolicy = () => {
  const { data } = useGetPrivacyPolicyQuery(undefined)

  return (
    <div className="space-y-5 w-full">
      <AdminHeader title="Terms & Conditions" description="Edit terms & conditions"></AdminHeader>
      <div>
        <BackButton text="Terms & Conditions"></BackButton>
      </div>
      <style>{`
        .privacy-content {
          overflow-x: hidden !important;
          overflow-y: hidden !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
        }
        .privacy-content * {
          max-width: 100% !important;
          overflow-x: hidden !important;
          overflow-y: hidden !important;
        }
        .privacy-content::-webkit-scrollbar {
          display: none !important;
        }
        .privacy-content {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .privacy-content h1 {
          font-size: 2rem !important;
          font-weight: 700 !important;
          margin: 1rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content h2 {
          font-size: 1.75rem !important;
          font-weight: 700 !important;
          margin: 1rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content h3 {
          font-size: 1.5rem !important;
          font-weight: 600 !important;
          margin: 0.875rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content h4 {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          margin: 0.75rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content h5 {
          font-size: 1.125rem !important;
          font-weight: 600 !important;
          margin: 0.625rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content h6 {
          font-size: 1rem !important;
          font-weight: 600 !important;
          margin: 0.5rem 0 !important;
          line-height: 1.2 !important;
        }
        .privacy-content p {
          margin: 0.5rem 0 !important;
          line-height: 1.6 !important;
        }
        .privacy-content strong {
          font-weight: 700 !important;
        }
        .privacy-content em {
          font-style: italic !important;
        }
        .privacy-content ol { 
          list-style-type: decimal !important; 
          margin-left: 1.5rem !important; 
          padding-left: 1.5rem !important;
        }
        .privacy-content ul { 
          list-style-type: disc !important; 
          margin-left: 1.5rem !important;
          padding-left: 1.5rem !important;
        }
        .privacy-content ol li { 
          display: list-item !important;
          margin-left: 0 !important;
        }
        .privacy-content ul li { 
          display: list-item !important;
          margin-left: 0 !important;
        }
        .privacy-content table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1rem 0 !important;
        }
        .privacy-content table td,
        .privacy-content table th {
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        .privacy-content pre {
          width: 100% !important;
          overflow-x: hidden !important;
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .privacy-content code {
          word-break: break-all !important;
        }
        .privacy-content blockquote {
          border-left: 4px solid currentColor !important;
          padding-left: 1rem !important;
          margin: 1rem 0 !important;
          font-style: italic !important;
        }
        .privacy-content a {
          color: #3b82f6 !important;
          text-decoration: underline !important;
        }
      `}</style>
      <div className="mt-3 border border-border-color rounded-xl bg-common p-6 w-full overflow-hidden">
        <div 
          className="privacy-content w-full overflow-x-hidden text-title" 
          dangerouslySetInnerHTML={{ __html: data?.privacy_policy || "" }} 
        />
      </div>
      <div className="flex justify-end items-center mt-5">
        <Link
          href={"/settings/privacy-policy/edit-terms-conditions"}
          className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center`}
        >
          Edit
        </Link>
      </div>
    </div>
  )
}

export default PrivacyPolicy