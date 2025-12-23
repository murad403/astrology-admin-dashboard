"use client";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import profileImage from "@/public/admin.png";
import { useUserDetailsQuery } from "@/redux/features/user/userApi";
import { TUser } from "@/app/types/user.types";
import { useDashboardQuery } from "@/redux/features/dashboard/dashboardApi";



const RecentUsersTable = () => {
    const [userId, setUserId] = useState<number>();
    const { data: userDetails } = useUserDetailsQuery(userId);
    const {data: userDashboard, isLoading} = useDashboardQuery(undefined);
    // console.log(userDashboard?.recent_users);

    // Fix: Ensure totalPages is always a valid number
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil((userDashboard?.recent_users?.length || 0) / 10));
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = userDashboard?.recent_users?.slice(startIndex, endIndex) || [];

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


    if (isLoading) {
        return <div className="flex justify-center w-full mt-20">
            <span className="loading loading-spinner text-header"></span>
        </div>
    }

    return (
        <div className="p-5 bg-common rounded-xl border border-border-color space-y-5">
            <h2 className="font-semibold text-xl text-header">Recent Users</h2>
            <div className="overflow-x-auto border border-border-color rounded-xl">
                <table className="table">
                    <thead>
                        <tr className="bg-main text-header">
                            <th>User</th>
                            <th>Date of Birth</th>
                            <th>Birth Country</th>
                            <th>Time of Birth</th>
                            <th>Birth City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentData?.map((user: TUser) =>
                                <tr className="bg-[#1F2544] text-header" key={user?.id}>
                                    <td className="flex items-center gap-3">
                                        <Image src={user?.profile_picture || profileImage} alt="user profile" width={48} height={48} className="rounded-full"></Image>
                                        <div>
                                            <h3 className="font-semibold text-[16px]">{user?.name}</h3>
                                            <p className="text-title font-medium text-sm">{user?.email}</p>
                                        </div>
                                    </td>
                                    <td className="text-header">{user?.date_of_birth}</td>
                                    <td>{user?.birth_country}</td>
                                    <td>{user?.time_of_birth}</td>
                                    <td>{user?.birth_city}</td>
                                    <td>
                                        <div className=" ml-3">
                                            {/* view user details modal */}
                                            <div>
                                                <Dialog>
                                                    <form>
                                                        <DialogTrigger asChild>
                                                            <button onClick={() => setUserId(user?.id)} className="cursor-pointer">
                                                                <MdOutlineRemoveRedEye size={20} />
                                                            </button>
                                                        </DialogTrigger>

                                                        <DialogContent className="w-[540px] p-7 space-y-7">
                                                            <DialogHeader>
                                                                <DialogTitle className="text-2xl">
                                                                    View User - {userDetails?.name}
                                                                </DialogTitle>
                                                            </DialogHeader>

                                                            <div className="space-y-4">

                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Name:</h3>
                                                                    <p className="w-[70%] border border-title rounded-xl p-3">{userDetails?.name}</p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Email:</h3>
                                                                    <p className="w-[70%] border overflow-x-hidden border-title rounded-xl p-3">{userDetails?.email}</p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Date of Birth:</h3>
                                                                    <p className="w-[70%] border border-title rounded-xl p-3">{userDetails?.profile?.date_of_birth}</p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Birth Country:</h3>
                                                                    <p className="w-[70%] border border-title rounded-xl p-3">{userDetails?.profile?.birth_country}</p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Birth City:</h3>
                                                                    <p className="w-[70%] border border-title rounded-xl p-3">{userDetails?.profile?.birth_city}</p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <h3 className="text-xl w-[40%]">Time of Birth:</h3>
                                                                    <p className="w-[70%] border border-title rounded-xl p-3">{userDetails?.profile?.time_of_birth}</p>
                                                                </div>
                                                            </div>

                                                            <DialogFooter className="w-full space-x-7">
                                                                <DialogClose className="w-full cursor-pointer h-[52px] bg-main text-white font-semibold rounded-xl" asChild>
                                                                    <button>Okay</button>
                                                                </DialogClose>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </form>
                                                </Dialog>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>


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

export default RecentUsersTable