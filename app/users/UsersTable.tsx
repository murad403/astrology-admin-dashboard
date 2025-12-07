/* eslint-disable react-hooks/incompatible-library */
"use client";
import { RiDeleteBin6Line } from "react-icons/ri"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import profileImage from "../../public/admin.jpg";
import { Eye } from "lucide-react";

const UsersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(20 / 5);
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const currentData = [2, 3, 4].slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const getPageNumbers = () => {
        const pages = [];
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

    const handleRemoveUser = () => {
        console.log("user remove");
    }
    return (
        <div className="p-5 bg-common rounded-xl border border-border-color space-y-5">
            <h2 className="font-semibold text-xl text-header">Users</h2>
            <div className="overflow-x-auto border border-border-color rounded-xl">
                <table className="table">
                    {/* head */}
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
                    <tbody className="bg-[#1F2544] text-header">
                        {/* row 1 */}
                        <tr>
                            <td className="flex items-center gap-3">
                                <Image src={profileImage} alt="user profile" width={48} height={48} className="rounded-full"></Image>
                                <div>
                                    <h3 className="font-semibold text-[16px]">Sarah Johson</h3>
                                    <p className="text-title font-medium text-sm">Sarah@gmail.com</p>
                                </div>
                            </td>
                            <td>12/12/2001</td>
                            <td>USA</td>
                            <td>12 am</td>
                            <td>Dhaka</td>
                            <td>
                                <div className="flex gap-3">

                                    {/* edit user modal */}
                                    <div>
                                        <Dialog>
                                            <form>
                                                <DialogTrigger asChild>
                                                    <button className="cursor-pointer">
                                                        <MdOutlineRemoveRedEye size={20} />
                                                    </button>
                                                </DialogTrigger>

                                                <DialogContent className="w-[540px] p-7 space-y-7">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl">
                                                            View User - Sadiqul vai
                                                        </DialogTitle>
                                                    </DialogHeader>

                                                    <div className="space-y-4">
                                                        <div className="flex justify-between">
                                                            <h3 className="text-xl w-[40%]">Name:</h3>
                                                            <p className="w-[60%] border border-title rounded-xl p-3">Sadiqul vai</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-xl w-[40%]">Date of Birth:</h3>
                                                            <p className="w-[60%] border border-title rounded-xl p-3">30/08/2025</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-xl w-[40%]">Birth Country:</h3>
                                                            <p className="w-[60%] border border-title rounded-xl p-3">USA</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-xl w-[40%]">Birth City:</h3>
                                                            <p className="w-[60%] border border-title rounded-xl p-3">Loas Angles</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-xl w-[40%]">Time of Birth:</h3>
                                                            <p className="w-[60%] border border-title rounded-xl p-3">12 pm</p>
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

                                    {/* remove user button modal */}
                                    <div>
                                        <Dialog>
                                            <form>
                                                <DialogTrigger asChild>
                                                    <button className="text-red-500 cursor-pointer">
                                                        <RiDeleteBin6Line size={18} />
                                                    </button>
                                                </DialogTrigger>

                                                <DialogContent className="h-[212px] w-[540px] space-y-5 p-7">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-2xl text-center">
                                                            Are you sure you want to Remove this <br /> user?
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <DialogFooter className="w-full space-x-7">
                                                        <DialogClose className="w-1/2 h-11 border border-slate-500 rounded-xl cursor-pointer" asChild>
                                                            <button>Cancel</button>
                                                        </DialogClose>
                                                        <DialogClose asChild>
                                                            <button onClick={handleRemoveUser} className="w-1/2 h-11 bg-main text-header rounded-xl cursor-pointer" type="submit">
                                                                Remove
                                                            </button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </form>
                                        </Dialog>
                                    </div>
                                </div>
                            </td>
                        </tr>
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
                                        <span className="px-3 py-2">...</span>
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

export default UsersTable
