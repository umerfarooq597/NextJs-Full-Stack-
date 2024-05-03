import React from 'react';
import { usersData } from "@/constants/users"
import userImage from '../../../../public/dummyprofile.jpeg'
const page = () => {
    const userHeadings = ["id", "Image", "Name", "e-mail", "status", "role",]
    return (
        <div>
            <table className="w-full text-sm text-left text-black rtl:text-right">
                <thead className="text-xs uppercase  ">
                    <tr>
                        {userHeadings.map((headings, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {headings}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((tableData, index) => (
                        <tr className="borderRounded border-b last:border-b-0 text-black hover:text-white hover:bg-gray-400 italic" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                {tableData.id}
                            </th>
                            <td className="px-6 py-4">
                                <img src={tableData.image} alt="" className='h-10 w-10 rounded-full' />
                            </td>
                            <td className="px-6 py-4">
                                {tableData.name}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.status}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.userType}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.userType}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default page