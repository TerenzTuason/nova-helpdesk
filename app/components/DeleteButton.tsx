"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

const DeleteButton = ({ ticketId } : {
    ticketId : string
}) => {

    const router = useRouter()

    const handleDelete = async () => {
        const res = await fetch("http://localhost:4000/tickets/" + ticketId, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })

        if(res.ok) {
            router.refresh()
        }
    }

    return (
        <div onClick={() => handleDelete()} className='h-fit py-[5px] px-[10px] bg-[#d93145] rounded-[5px] hover:brightness-[0.8] duration-[300ms]'>
            <FaTrash className='h-[1.5em] w-[1.5em] text-white' />
        </div>
    )
}

export default DeleteButton