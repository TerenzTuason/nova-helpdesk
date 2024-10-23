"use client"

import BackButton from '@/app/components/BackButton'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'

const EditTicket = ({ params }: {
    params: { id: string }
}) => {

    const router = useRouter()

    useEffect(() => {
        const getTicketData = async () => {
            const res = await fetch("http://localhost:4000/tickets/" + params.id, {
                cache: 'no-store'
            })

            const data = await res.json()
            setTitle(data.title)
            setBody(data.body)
            setPriority(data.priority)
        }

        getTicketData()
    }, [])

    const handleSubmit = async(e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const ticketBody = {
            title, body, priority, userEmail : "terenzjetcemtuason@gmail.com"
        }

        const res = await fetch("http://localhost:4000/tickets/" + params.id, {
            method: "PUT",
            body: JSON.stringify(ticketBody),
            headers: {"Content-Type": "application/json"},
        })

        if(res.ok) {
            router.replace("/tickets")
            router.refresh()
        }
    }

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [priority, setPriority] = useState("")

    return (
        <div className='p-[30px] bg-gunmetal min-h-screen'>
            <BackButton />

            <div className=' mt-[30px] flex justify-center'>
                <form onSubmit={handleSubmit} className='w-[80%] flex flex-col gap-[20px] rounded-[20px] bg-jet p-[30px]'>

                    <p className='font-bold text-white text-center'>Edit Ticket #SD{parseInt(params.id).toLocaleString('en-US', {
                        minimumIntegerDigits: 5,
                        useGrouping: false
                    })}</p>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='w-[70px] font-bold text-white'>Title:</p>
                        <input
                            required
                            type="text"
                            className='bg-gray w-full rounded-[10px] p-[10px] px-[20px]'
                            onChange={e => setTitle(e.target.value)}
                            value={title} />
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='w-[70px] font-bold text-white'>Body:</p>
                        <textarea
                            required
                            className='bg-gray w-full h-[150px] rounded-[10px] p-[10px] px-[20px]'
                            onChange={e => setBody(e.target.value)}
                            value={body} />
                    </div>

                    <div className='flex flex-col gap-[10px]'>
                        <p className='w-[70px] font-bold text-white'>Priority:</p>
                        <select
                            onChange={e => setPriority(e.target.value)}
                            value={priority}
                            className='bg-gray w-full rounded-[10px] p-[10px] px-[20px]'>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className='flex justify-center mt-[20px]'>
                        <button
                            className='bg-lavender text-black font-bold py-[10px] px-[20px] rounded-[10px] hover:brightness-[0.8] duration-[300ms]'>
                            Edit Ticket
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default EditTicket