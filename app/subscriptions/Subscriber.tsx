/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import image from "../../public/admin.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

type TSubscribers = {
    name: string;
    email: string;
    image: any;
    plan: string
}
const subcribers: TSubscribers[] = [
    {
        name: "Sarah Johson",
        email: "info@gmail.com",
        image: image,
        plan: "standard"
    },
    {
        name: "Sarah Johson",
        email: "info@gmail.com",
        image: image,
        plan: "standard"
    },
    {
        name: "Sarah Johson",
        email: "info@gmail.com",
        image: image,
        plan: "standard"
    },
]
type TSubscriberEdit = {
    subscriptionType: string;
}
const Subscriber = () => {
    const {
        register,
        watch
    } = useForm<TSubscriberEdit>();

    const handleEditSubscriber = () => {
        const subscriptionType = watch("subscriptionType");

        console.log(subscriptionType);
    }
    return (
        <div className='bg-common border border-border-color p-5 rounded-xl '>
            <h2 className='mb-5 font-bold text-2xl text-header'>Subscriber</h2>
            <div className="space-y-4">
                {
                    subcribers.map((subcriber, index) =>
                        <div className="flex justify-between items-center" key={index}>
                            <div className="flex items-center gap-3">
                                <Image src={subcriber.image} alt={subcriber.name} width={60} height={60} className="rounded-full"></Image>
                                <div>
                                    <h3 className="text-[20px] font-semibold text-header">{subcriber.name}</h3>
                                    <p className="text-[15px] font-medium text-title">{subcriber.email}</p>
                                </div>
                            </div>
                            <div className="text-header flex items-center gap-5">
                                <h2 className="border border-border-color py-2 px-5 rounded-xl">{subcriber.plan}</h2>
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <button
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
                                                    <p className="w-[60%] border border-title rounded-xl p-3">Sadiqul vai</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl w-[40%]">Gmail:</h3>
                                                    <p className="w-[60%] border border-title rounded-xl p-3">info@gmail.com</p>
                                                </div>
                                                <div className="flex justify-between items-center relative">
                                                    <label className="text-xl w-[40%] ">Subscription Type:</label>
                                                    <select className="border appearance-none border-title w-[60%] outline-none py-3 px-2 rounded-xl" {...register("subscriptionType")}>
                                                        <option value="standard">Standard</option>
                                                        <option value="premium">Premium</option>
                                                        <option value="platinum">Platinum</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl w-[40%]">Purchase Date:</h3>
                                                    <p className="w-[60%] border border-title rounded-xl p-3">12/11/2025</p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-xl w-[40%]">Expire Date:</h3>
                                                    <p className="w-[60%] border border-title rounded-xl p-3">12/12/2025</p>
                                                </div>
                                            </div>

                                            <DialogFooter className="w-full space-x-7">
                                                <DialogClose className="w-1/2 h-11 border border-slate-500 rounded-xl cursor-pointer" asChild>
                                                    <button>Cancel</button>
                                                </DialogClose>
                                                <button onClick={handleEditSubscriber} className="w-1/2 h-11 bg-main cursor-pointer text-header rounded-xl" type="submit">
                                                    Save changes
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
        </div>
    )
}

export default Subscriber
