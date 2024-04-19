"use client"
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { pagesNavbar, analyticsNavbar, userNavbar } from "@/constants/sidebar"
import Link from 'next/link'

const Sidebar = (props: { handleNavHeading: any }) => {
    const { handleNavHeading } = props
    const allNavbars = [
        { category: "Pages", items: pagesNavbar },
        { category: "Analytics", items: analyticsNavbar },
        { category: "User", items: userNavbar }
    ];
    return (
        <div className='flex flex-col align-middle sm:p-2 p-0 sm:items-start items-center justify-center rounded'>
            <div className="flex my-4 space-x-2">
                <FaRegUserCircle className='sm:w-10 sm:h-10 w-5 h-5  text-white' />
                <div className='text-sm hidden sm:block text-white my-auto space-x-0'>
                    <p className='text-sm my-0'>user1</p>
                    <p className='text-[8px] mt-[-6px]'>Administration</p>
                </div>
            </div>
            <div className='sm:ml-0 mx-auto space-y-7 sm:space-y-0'>
                {allNavbars.map((category, index) => (
                    <div key={index}>
                        <p className="text-[10px] sm:block hidden text-white">{category.category}</p>
                        {category.items.map((page, pageIndex) => (
                            <div key={`${index}-${pageIndex}`} className="hover:bg-blue-500 w-48 rounded my-2 sm:space-y-3 active:bg-blue-500" onClick={() => handleNavHeading(page.label)}>
                                <Link href={page.link}>
                                    <div className="text-center sm:ml-3 space-y-2">
                                        <div className="w-full text-center text-white flex align-middle items-center">
                                            <div className="flex justify-start items-start text-start space-x-2">
                                                <span className="p-0 m-0 my-auto">{page.icon}</span>
                                                <p className="p-0 m-0 my-auto hidden sm:block sm:text-xs md:text-base">{page.label}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar