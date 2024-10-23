import Link from 'next/link'
import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import DeleteButton from '../components/DeleteButton';

interface Ticket {
  id: string,
  title: string,
  body: string,
  priority: string,
  userEmail: string
}

const Tickets = async () => {

  const res = await fetch("http://localhost:4000/tickets",
    {
      cache: 'no-store'
    }
  )

  const tickets: Ticket[] = await res.json()

  const priorityColors: { [key: string]: string } = {
    "Low": "text-[#34D399]",
    "Medium": "text-[#FBBF24]",
    "High": "text-[#F87171]"
  }

  return (
    <div className="py-[30px] bg-gunmetal min-h-screen">
      {/* <div className='px-[40px] flex justify-end gap-[20px]'>
        <input type="search" className='py-[5px] px-[10px] rounded-[10px] bg-gray w-[300px]' />

        <select name="" id="" className='py-[5px] px-[10px] rounded-[10px] bg-gray text-white'>
          <option value="">Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select name="" id="" className='py-[5px] px-[10px] rounded-[10px] bg-gray text-white'>
          <option value="">Status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div> */}

      <div className='px-[40px] grid grid-cols-[1.5fr,3fr,2fr,2fr] gap-[10px] text-gray'>
        <p>ID</p>
        <p>Description</p>
        <p>Priority</p>
        <p>Actions</p>
      </div>

      <div className=''>
        {tickets.slice().reverse().map((ticket) => (
          <div>
            <div className='bg-gray h-[0.5px] my-[15px]'></div>

            <div className='grid grid-cols-[1.5fr,3fr,2fr,2fr] gap-[10px] px-[40px] text-white'>
              <p>SD{parseInt(ticket.id).toLocaleString('en-US', {
                minimumIntegerDigits: 5,
                useGrouping: false
              })}</p>

              <div className='flex flex-col gap-[10px]'>
                <div className='flex justify-between'>
                  <p>{ticket.title}</p>
                </div>
                <p className='text-sm text-gray'>From: {ticket.userEmail}</p>
              </div>

              <p className={`${priorityColors[ticket.priority]}`}>{ticket.priority}</p>

              <div className='flex gap-[20px]'>
                <Link href={"/tickets/" + ticket.id}>
                  <div className='py-[5px] px-[10px] bg-[#077bfd] rounded-[5px] hover:brightness-[0.8] duration-[300ms]'>
                    <FaEye className='h-[1.5em] w-[1.5em] text-white' />
                  </div>
                </Link>

                <Link href={"/tickets/" + ticket.id + "/edit"}>
                  <div className='py-[5px] px-[10px] bg-[#1ea741] rounded-[5px] hover:brightness-[0.8] duration-[300ms]'>
                    <FaPen className='h-[1.5em] w-[1.5em] text-white' />
                  </div>
                </Link>

                <DeleteButton ticketId={ticket.id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tickets