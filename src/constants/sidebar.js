import { FaDollarSign } from "react-icons/fa";
import { HiBriefcase, HiDocumentReport, HiUsers } from "react-icons/hi";
import { IoIosLogOut, IoMdBriefcase } from "react-icons/io";
import { MdOutlineDashboard, MdSupervisedUserCircle } from "react-icons/md";
import { TbHelpSquareFilled } from "react-icons/tb";

export const pagesNavbar = [
    {
        label:"Dashboard",
        icon:<MdOutlineDashboard />,
        link:"/dashboard"
    },
    {
        label:"User",
        icon:<MdSupervisedUserCircle />,
        link:"/dashboard/user"
    },
    {
        label:"Products",
        icon:<HiBriefcase />,
        link:"/dashboard/products"
    },
    {
        label:"Transactions",
        icon:<FaDollarSign />,
        link:"/dashboard"
    },
]
export const analyticsNavbar = [
    {
        label:"Revenue",
        icon:<IoMdBriefcase />,
        link:"/dashboard"
    },
    {
        label:"Reports",
        icon: <HiDocumentReport />,
        link:"/dashboard"
    },
    {
        label:"Teams",
        icon:<HiUsers />,
        link:"/dashboard"
    },
]
export const userNavbar = [
    {
        label:"Setting",
        icon:<IoMdBriefcase />,
        link:"/dashboard"
    },
    {
        label:"Help",
        icon:<TbHelpSquareFilled />,
        link:"/dashboard"
    },
    {
        label:"Logout",
        icon:<IoIosLogOut />,
        link:"/login"
    },
]