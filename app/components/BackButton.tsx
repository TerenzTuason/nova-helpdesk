"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

const BackButton = () => {

    const router = useRouter()

    return (
        <button onClick={() => router.back()} className='p-[10px] bg-lavender w-fit rounded-full hover:brightness-[0.8] duration-[300ms]'>
            <IoMdArrowRoundBack className='text-[24px]' />
        </button>
    )
}

export default BackButton