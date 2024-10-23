import BackButton from '@/app/components/BackButton'
import React from 'react'

const Ticket = async ({ params }: {
    params: {
        id: string
    }
}) => {

    const res = await fetch("http://localhost:4000/tickets/" + params.id)

    const ticket = await res.json()

    const priorityColors: { [key: string]: string } = {
        "Low": "bg-[#34D399]",
        "Medium": "bg-[#FBBF24]",
        "High": "bg-[#F87171]"
    }

    return (
        <div className='p-[30px] bg-gunmetal min-h-screen'>

            <BackButton/>

            <div className='rounded-[10px] bg-jet mt-[30px] text-white'>
                <p className='font-bold px-[20px] pt-[20px]'>{ticket.title}</p>
                <p className='mt-[5px] mx-[20px] text-sm'>Created by {ticket.userEmail}</p>
                <p className='mx-[20px] mt-[30px]'>{ticket.body}</p>
                <div className='flex justify-end mt-[20px]'>
                    <div className={`rounded-tl-[10px] rounded-br-[10px] px-[20px] py-[10px] ${priorityColors[ticket.priority]}`}>{ticket.priority} Priority</div>
                </div>
            </div>

        </div>
    )
}

export default Ticket