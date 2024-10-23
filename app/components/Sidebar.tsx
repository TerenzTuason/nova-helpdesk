"use client"

import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import { MdDashboard } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideBar = () => {

    const pathname = usePathname()

    return (
        <div className='w-[20%] h-screen bg-jet p-[0px] flex flex-col justify-between fixed'>

            <div>
                <div className='font-bold text-lavender text-[20px] flex items-center gap-[10px] p-[20px]'>
                    <Image src={logo} width={40} quality={100} alt={''} />
                    <p>Nova Helpdesk</p>
                </div>

                <div className='font-semibold mt-[10px] flex flex-col'>
                    <Link href={"/"} className={`${pathname === '/' ? 'text-white' : 'text-gray'}  p-[20px] hover:brightness-[1.3] flex items-center gap-[20px] duration-[300ms]`}><MdDashboard className='h-[1.5em] w-[1.5em]' />Dashboard</Link>

                    <Link href={"/tickets"} className={`${pathname === '/tickets' ? 'text-white' : 'text-gray'}  p-[20px] hover:brightness-[1.3] flex items-center gap-[20px] duration-[300ms]`}><IoMdListBox className='h-[1.5em] w-[1.5em]' />Tickets</Link>

                    <Link href={"/users"} className={`${pathname === '/users' ? 'text-white' : 'text-gray'}  p-[20px] hover:brightness-[1.3] flex items-center gap-[20px] duration-[300ms]`}><FaUsers className='h-[1.5em] w-[1.5em]' />Users</Link>
                </div>
            </div>

            <Link href={"/create"} className={`${pathname === "/create" ? 'hidden' : "block"} p-[20px] pb-[30px]`}>
                <button className='bg-lavender rounded-[10px] w-full py-[10px] font-bold hover:brightness-[0.8] duration-[300ms]'>Create Ticket</button>
            </Link>

        </div>
    )
}

export default SideBar