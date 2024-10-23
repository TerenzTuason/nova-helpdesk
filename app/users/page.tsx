import React, { cache } from 'react'

interface User {
    _id: number,
    name: string,
    email: string,
    password: string,
}


const Users = async () => {

    const res = await fetch("http://localhost:3000/api/routes",
        {
            cache: 'no-store'
        }
    )

    const users: User[] = await res.json()

    return (
        <div className="py-[30px] bg-gunmetal w-full min-h-screen">
            <div className='px-[40px] grid grid-cols-4 gap-[10px] text-gray'>
                <p>ID</p>
                <p>Name</p>
                <p>Email</p>
                <p>Password</p>
            </div>

            <div className=''>
                {users.map((user) => (
                    <div>
                        <div className='bg-gray h-[0.5px] my-[15px]'></div>
                        <div className='grid grid-cols-4 px-[40px] gap-[10px] text-white'>
                            <p>{user._id}</p>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p className='truncate'>{user.password}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users