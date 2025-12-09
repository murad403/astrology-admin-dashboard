"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = ({ text }: { text: string }) => {
    const router = useRouter();
    return (
        <div className="text-[18px] text-header flex items-center justify-start gap-4">
            <button className="cursor-pointer" onClick={() => router.back()}>
                <FaArrowLeft />
            </button>
            <h3 className="font-semibold capitalize text-2xl">{text}</h3>
        </div>
    )
}

export default BackButton
