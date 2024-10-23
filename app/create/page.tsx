"use client"

import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { useRouter } from 'next/navigation'

const CreateTicket = () => {

    const router = useRouter()

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [priority, setPriority] = useState("Low")

    useEffect(() => {
        const getData = async() => {
            const res = await fetch("http://localhost:4000/tickets", {
                cache: 'no-store'
            })
            const tickets = await res.json()
            setId((tickets.length + 1).toString())
        }

        getData()
    }, [])

    const ticket = {
        id, title, body, priority, userEmail : "terenzjetcemtuason@gmail.com"
    }

    const handleCreate = async() => {
        const res = await fetch("http://localhost:4000/tickets", {
            method: "POST",
            body: JSON.stringify(ticket),
            headers: {"Content-Type": "application/json"}
        })

        if(res.ok) {
            router.back()
            router.refresh()
        }
    }

    return (
        <div className='p-[30px] bg-gunmetal min-h-screen'>
            <BackButton />

            <div className=' mt-[30px] flex justify-center'>
                <form onSubmit={handleCreate} className='w-[80%] flex flex-col gap-[20px] rounded-[20px] bg-jet p-[30px]'>

                    <p className='font-bold text-white text-center'>Create New Ticket</p>

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
                            required
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
                            Add Ticket
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default CreateTicket