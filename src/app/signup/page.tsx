"use client"
import Link from 'next/link';
import React, { FormEvent } from 'react'

const page = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    }
   
    return (
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white">
                <h2 className="font-bold text-xl text-center text-neutral-800">
                    Sign Up
                </h2>
                <form className="my-5 " onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <div>
                            <label htmlFor="firstname">First name</label>
                            <input className='bg-slate-300 w-full rounded px-2 py-1' id="firstname" placeholder="John" type="text" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Last name</label>
                            <input className='bg-slate-300 w-full rounded px-2 py-1'  id="lastname" placeholder="Vick" type="text" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email Address</label>
                        <input className='bg-slate-300 w-full rounded px-2 py-1' id="email" placeholder="xyz@fc.com" type="email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password</label>
                        <input className='bg-slate-300 w-full rounded px-2 py-1' id="password" placeholder="••••••••" type="password" />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="twitterpassword">Your twitter password</label>
                        <input
                            className='bg-slate-300 w-full rounded px-2 py-1'
                            id="twitterpassword"
                            placeholder="••••••••"
                            type="twitterpassword"/>
                    </div>

                    <Link href="/login">
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
                            type="submit"
                        >
                            Sign up &rarr;
                        </button>
                    </Link>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    <div className="flex space-x-2 text-white">
                        <button
                            className=" bg-black  relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input "
                            type="submit"
                        >
                            <span className="text-white mx-auto text-sm">
                                GitHub
                            </span>
                        </button>
                        <button
                            className=" bg-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input "
                            type="submit"
                        >
                            <span className="text-white mx-auto text-sm">
                                Google
                            </span>
                        </button>
                    </div>
                    <p className='text-center mt-3'>Already have an Account? <Link className='text-blue-700' href="/login">Login</Link></p>
                </form>
            </div>
    )
}

export default page