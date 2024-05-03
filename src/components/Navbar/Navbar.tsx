"use client"
import { usePathname } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdNotificationsNone } from 'react-icons/md';

interface NavbarProps{
    navbarHeading:string;
    setNavbarHeading:React.Dispatch<React.SetStateAction<string>>;
}

const Navbar:React.FC<NavbarProps> = (props: { navbarHeading: string; setNavbarHeading: any; }) => {
    const {navbarHeading, setNavbarHeading} = props;
    const pathName = usePathname();
    useEffect(() => {
        const pathSegments = pathName.split("/");
        const lastValue = pathSegments.filter((segment) => segment !== "").map((segment) => segment).pop();
        // setPathNameValue(lastValue || "");
        setNavbarHeading(lastValue||"");
    }, [pathName])
    
    return (
        <nav className="bg-gray-800 text-white rounded dark:bg-gray-900 ">
            <div className="max-w-full flex flex-wrap items-center justify-center text-center sm:justify-between mx-auto">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center sm:text-2xl text-xl sm:ms-2 font-semibold whitespace-nowrap dark:text-white capitalize">{navbarHeading }</span>
                </a>
                <div className='sm:items-center sm:justify-between justify-center rounded bg-gray-800 items-center text-center w-full sm:flex sm:w-auto flex-col' id="navbar-sticky">
                    <ul className="flex md:p-0 sm:my-auto justify-center items-center text-center rounded-lg bg-gray-800 flex-col-reverse space-y-reverse space-y-6 sm:space-y-0 sm:flex-row ">
                        <li className='w-full'>
                            <div className="relative flex items-center justify-between sm:justify-around my-2 mx-4">
                                <input type="search" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                                <div className="absolute text-black inset-y-0 left-0 flex items-center pl-3">
                                    <FiSearch />
                                </div>
                            </div>
                        </li>
                        <li className='my-auto flex sm:justify-end justify-evenly sm:w-auto w-full'>
                            <span className=" mt-3 sm:mt-0  rounded p-4 sm:p-2.5 border-2 sm:border-0"><MdNotificationsNone className='w-7 h-7'/></span>
                            <span className=" mt-3 sm:mt-0  rounded p-4 sm:p-2.5 border-2 sm:border-0"><BsFillChatLeftTextFill className='w-7 h-7' /> </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
