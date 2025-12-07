/* eslint-disable @typescript-eslint/no-explicit-any */
import { Crown } from "lucide-react"
import { HiOutlineUserGroup } from "react-icons/hi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineDashboard } from "react-icons/md"

type TAdminSidebarItem = {
    title: string
    url: string
    icon: React.ComponentType<any>
}

const adminSidebarItems: TAdminSidebarItem[] = [
    {
        title: "Dashboard",
        url: "/",
        icon: MdOutlineDashboard,
    },
    {
        title: "User",
        url: "/users",
        icon: HiOutlineUserGroup,
    },
    {
        title: "Subscriptions",
        url: "/subscriptions",
        icon: Crown,
    },
    {
        title: "Notifications",
        url: "/notifications",
        icon: IoMdNotificationsOutline,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: IoSettingsOutline,
    },
]

export default adminSidebarItems