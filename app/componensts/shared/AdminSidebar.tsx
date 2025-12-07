"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from '../../../public/logo.png'
import adminSidebarItems from "@/app/libs/AdminSidebar"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CiCircleQuestion } from "react-icons/ci"

const AdminSidebar = () => {
  const pathName = usePathname();
  // console.log(pathName);

  const handleLogout = () => {
    console.log("Admin logout successfully");
  }

  return (
    <Sidebar className="w-[300px] p-10 bg-common">
      <SidebarHeader className="flex flex-col items-center justify-center py-4 bg-common">
        <Image src={logo} alt="logo" width={60} height={60} className="rounded-full"></Image>
        <SidebarGroupLabel className="mt-2 text-[16px] text-[#FA7B34] font-semibold text-center">
          Universal Astrology
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent className="bg-common text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminSidebarItems?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link className={`${pathName === item.url ? "bg-main text-header" : "bg-[#1F2544] hover:bg-slate-600 text-title hover:text-white"} mb-4 py-5  `} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-common">

        <Dialog>
          <form>
            <DialogTrigger asChild>
              <button onClick={handleLogout} className="flex items-center gap-3 rounded-md px-4 w-full font-medium text-[18px] bg-[#1F2544] hover:bg-main transition-all duration-300 cursor-pointer py-2">
                <LogOut className="text-[#E33629]" size={18} />
                <span className="text-white">Logout</span>
              </button>
            </DialogTrigger>

            <DialogContent className="w-[540px] space-y-5 p-7">
              <DialogHeader>
                <DialogTitle className="text-2xl flex flex-col justify-center items-center">
                  <CiCircleQuestion size={40} className="text-red-400" />
                  Are you sure you want to log out?
                </DialogTitle>
              </DialogHeader>
              <DialogFooter className="w-full space-x-7">
                <DialogClose className="w-1/2 h-11 border border-slate-500 rounded-xl cursor-pointer" asChild>
                  <button>Cancel</button>
                </DialogClose>
                <button onClick={handleLogout} className="w-1/2 h-11 bg-main cursor-pointer text-header rounded-xl" type="submit">
                  Logout
                </button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AdminSidebar
