import React from 'react'
import { dashboardCards } from "@/constants/Dashboard"
import { dashboardTransactions } from '@/constants/Dashboard'
// import Linechart from '@/components/Charts/Linechart'
import dynamic from 'next/dynamic';
// import { LineChart } from 'recharts';
const Linechart = dynamic(
    () => import("@/components/Charts/Barchart"),
    
    {//   loading: () => <p>Loading...</p>,
      ssr: false,}
    
  );


const page = () => {
    const tableHeadings = [
        "Name","Status","Date","Amount"
    ]
    return (
        <div className='w-full flex space-x-2'>
            <div className="main w-3/4 space-y-2">
                <div className='flex border space-x-2 justify-between h-20  text-white rounded'>
                    {dashboardCards.map((Cards, index) => (
                        <div tabIndex={index} key={index} className="w-1/3 rounded flex bg-gray-800 card hover:bg-gray-700 ">
                            <div className="icon rounded-full border w-7  h-7 m-3 p-1">{Cards.icon}</div>
                            <div className="text rounded-full mt-3">
                                <p className='text-sm'>{Cards.label}</p>
                                <p>{Cards.data}</p>
                                <p className='text-xs'><span className='text-teal-400'>{Cards.percent}</span>{"   "}{Cards.percentText}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=' border space-x-2 justify-between bg-gray-800 p-3 text-white rounded'>
                    <div className="relative overflow-x-auto">
                        <p className='capitalize'>Latest Transactions</p>
                        <table className="w-full text-sm text-left text-white rtl:text-right">
                            <thead className="text-xs text-white uppercase  ">
                                <tr>
                                    {tableHeadings.map((headings,index)=>(
                                    <th key={index} scope="col" className="px-6 py-3">
                                        {headings}
                                    </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {dashboardTransactions.map((tableData,index)=>(
                                <tr className=" border-b last:border-b-0 hover:bg-gray-700 hover:rounded-lg" key={index}>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap ">
                                        {tableData.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {tableData.image}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tableData.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tableData.amount}
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=' border space-x-2 justify-between bg-blue-800 p-3 text-white rounded'>
                    <div className="relative overflow-x-auto">
                        <p className='capitalize'>Weekly Recap</p>
                        <div className=''><Linechart/></div>
                    </div>
                </div>
            </div>
            <div className="side w-1/4 space-y-2">
                <div className='bg-red-900 h-48 text-white rounded p-3'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className='bg-red-900 h-48 text-white rounded p-3'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page