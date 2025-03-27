"use client"
import React, { useState } from 'react'
import Select from "react-select";
import UserAdd from '../components/userAdd';

export default function Users() {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ];

      const [isUserAdd, setIsUserAdd] = useState(false);
  return (
    <div>
        {isUserAdd && <UserAdd Close={()=>setIsUserAdd(false)} /> }
        <p className=' header text-center my-2'>USERS</p>
      <div className='border px-2 py-5 w-full flex flex-col items-center'>
        <p className='title text-left w-full'>Add User</p>
        <button className='mt-2 btn bg-amber-50 w-[800px] h-16 text-3xl ' onClick={()=>setIsUserAdd(true)}>Add</button>
      </div>

      <div className='border p-2 my-15 py-1.5'>
        <p className='title'>USER Update / Delete</p>
        <div className='flex justify-start gap-x-11 my-3'>
            <p className='label'>Find User :</p>
            <Select
                  className="w-3/6"
                  options={options}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? "grey" : "red",
                    }),
                  }}
                />
        </div>
      </div>



    </div>
  )
}
