"use client"
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React, { ReactNode, useState } from 'react'

interface LayoutProps {
    children: ReactNode;
}
const layout = ({ children }: LayoutProps) => {
    const [navbarHeading, setNavbarHeading] = useState<string>('');
    
    const handleNavHeading = (heading: string) => {
        setNavbarHeading(heading);
    };
    return (
        <div className='flex'>
            <div className="sidebar w-[10%] sm:w-1/5 lg:w-1/6 xl:w-1/6 fixed top-0 h-auto md:h-[95vh] left-0  bg-gray-800 rounded"><Sidebar handleNavHeading={handleNavHeading}/></div>
            <div className="Main ml-auto w-5/6 xl:w-5/6 lg:w-5/6 sm:w-4/5">
                <div className="navbar w-full bg-white   max-w-screen-xl mx-auto px-3 py-2"><Navbar navbarHeading={navbarHeading} setNavbarHeading={setNavbarHeading}/></div>
                <div className='px-3'>{children}</div>
            </div>
        </div>
    )
}

export default layout