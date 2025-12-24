/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import profileImage from "@/public/admin.png";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TSubscriber, TSubscriptionPlan } from "../types/subscription.types";
import { useSubscriberListQuery, useSubscriptionPlansQuery, useUpdateSubscriptionMutation } from "@/redux/features/subscription/subscriptionApi";
import { CiCalendar } from "react-icons/ci";
import { toast } from "react-toastify";


type TSubscriberEdit = {
    plan_id: string;
    start_date: string;
    end_date: string;
}

const Subscriber = () => {
    const { data, isLoading: isSubscriberLoading } = useSubscriberListQuery(undefined);
    const [updateSubscription, { isLoading }] = useUpdateSubscriptionMutation();

    const [userId, setUserId] = useState<number>();
    const { register, watch } = useForm<TSubscriberEdit>();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil((data?.subscribers?.length || 0) / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = data?.subscribers?.slice(startIndex, endIndex) || [];
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            }
        }

        return pages;
    };
    const { data: subscriptionPlans } = useSubscriptionPlansQuery(undefined);

    const handleEditSubscriber = async () => {
        const plan_id = Number(watch("plan_id"));
        const start_date = watch("start_date");
        const end_date = watch("end_date");
        const updatedData = {
            plan_id, start_date, end_date
        }
        try {
            const result = await updateSubscription({ updatedData, userId }).unwrap();
            toast(result?.message);
        } catch (error: any) {
            console.log(error);
        }
    }


    if (isSubscriberLoading) {
        return <div className="flex justify-center w-full mt-20">
            <span className="loading loading-spinner text-header"></span>
        </div>
    }

    return (
        <div className='bg-common border border-border-color p-5 rounded-xl '>
            <h2 className='mb-5 font-bold text-2xl text-header'>Subscriber</h2>
            <div className="space-y-4">
                {
                    currentData.map((subcriber: TSubscriber) =>
                        <div className="flex justify-between items-center" key={subcriber?.id}>
                            <div className="flex items-center gap-3">
                                <Image src={subcriber?.profile_picture || profileImage} alt={subcriber?.name} width={60} height={60} className="rounded-full"></Image>
                                <div>
                                    <h3 className="text-[20px] font-semibold text-header">{subcriber?.name}</h3>
                                    <p className="text-[15px] font-medium text-title">{subcriber?.email}</p>
                                </div>
                            </div>
                            <div className="text-header flex items-center gap-5">
                                <h2 className="border border-border-color py-2 px-5 rounded-xl bg-slate-600">{subcriber?.subscription_type}</h2>

                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <button onClick={() => setUserId(subcriber.id)}
                                                className="border border-border-color py-2 px-5 rounded-xl cursor-pointer"
                                            >
                                                View
                                            </button>
                                        </DialogTrigger>

                                        <DialogContent className="w-[540px] space-y-5 p-7">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl">
                                                    Edit User - {subcriber?.name}
                                                </DialogTitle>
                                            </DialogHeader>

                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl w-[40%]">Name:</h3>
                                                    <p className="w-[68%] border border-title rounded-xl p-3">{subcriber?.name}</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl w-[40%]">Gmail:</h3>
                                                    <p className="w-[68%] border border-title rounded-xl p-3">{subcriber?.email}</p>
                                                </div>
                                                <div className="flex justify-between items-center relative">
                                                    <label className="text-xl w-[40%] ">Subscription Type:</label>
                                                    <select className="border appearance-none border-title w-[68%] outline-none py-3 px-2 rounded-xl capitalize" {...register("plan_id")}>
                                                        <option value="" defaultChecked disabled>{subcriber?.subscription_type}</option>
                                                        {
                                                            subscriptionPlans?.map((plan: TSubscriptionPlan) =>
                                                                <option key={plan?.id} value={plan?.id}>{plan?.name}</option>
                                                            )
                                                        }
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-xl w-[40%]">Purchase Date:</h3>
                                                    <div className="w-[68%] relative">
                                                        <input
                                                            {...register("start_date")}
                                                            defaultValue={subcriber?.purchase_date || ""}
                                                            id={`start_date_${subcriber?.id}`}
                                                            className="border w-full border-title rounded-xl p-3 pr-10 outline-none cursor-pointer"
                                                            type="date"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const input = document.getElementById(`start_date_${subcriber?.id}`) as HTMLInputElement;
                                                                if (input?.showPicker) {
                                                                    input.showPicker();
                                                                } else {
                                                                    input?.focus();
                                                                }
                                                            }}
                                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                                        >
                                                            <CiCalendar size={20} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-xl w-[40%]">Expire Date:</h3>
                                                    <div className="w-[68%] relative">
                                                        <input
                                                            {...register("end_date")}
                                                            defaultValue={subcriber?.expire_date || ""}
                                                            id={`end_date_${subcriber?.id}`}
                                                            className="border w-full border-title rounded-xl p-3 pr-10 outline-none cursor-pointer"
                                                            type="date"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                const input = document.getElementById(`end_date_${subcriber?.id}`) as HTMLInputElement;
                                                                if (input?.showPicker) {
                                                                    input.showPicker();
                                                                } else {
                                                                    input?.focus();
                                                                }
                                                            }}
                                                            className="absolute inset-y-0 right-0 flex items-center pr-3 "
                                                        >
                                                            <CiCalendar size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <DialogFooter className="w-full space-x-7">
                                                <DialogClose className="w-1/2 h-11 border border-slate-500 rounded-xl cursor-pointer" asChild>
                                                    <button>Cancel</button>
                                                </DialogClose>
                                                <button onClick={handleEditSubscriber} className="w-1/2 h-11 bg-main cursor-pointer text-header rounded-xl" type="submit">
                                                    {
                                                        isLoading ? <span className="loading loading-spinner text-header"></span> : "Save changes"
                                                    }

                                                </button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </form>
                                </Dialog>

                            </div>
                        </div>
                    )
                }
            </div>


            {/* pagination */}
            <div className="flex justify-center mt-6">
                <Pagination>
                    <PaginationContent className="flex justify-between w-full">
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={`cursor-pointer ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                                    } bg-border-color text-header`}
                            />
                        </PaginationItem>

                        <div className="flex gap-2">
                            {getPageNumbers().map((page, index) => (
                                <PaginationItem key={index}>
                                    {page === "..." ? (
                                        <span className="px-3 py-2 text-header tracking-[10px]">...</span>
                                    ) : (
                                        <PaginationLink
                                            onClick={() => handlePageChange(page as number)}
                                            isActive={currentPage === page}
                                            className={`cursor-pointer border-none ${currentPage === page
                                                ? "bg-main text-white"
                                                : "hover:bg-gray-100 text-title"
                                                }`}
                                        >
                                            {page}
                                        </PaginationLink>
                                    )}
                                </PaginationItem>
                            ))}
                        </div>

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={`cursor-pointer ${currentPage === totalPages
                                    ? "cursor-not-allowed opacity-50"
                                    : ""
                                    } bg-border-color text-header`}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default Subscriber
