"use client"
import React, { useState } from 'react';
import Select from "react-select";
import InventoryAdd from '../components/inventoryAdd';

export default function Inventory() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const[isInventoryAdd, setIsInventoryAdd] = useState(false)
  return (
    <div className=''>
       {isInventoryAdd && <InventoryAdd Close={()=>setIsInventoryAdd(false)}/>}
    {/* <div className=''> */}
     
      <p className=' header text-center my-2'>INVENTORY</p>

      <div className='border px-2 py-5 w-full flex flex-col items-center'>
        <p className='title text-left w-full'>Add Inventory </p>
        <button className='mt-2 btn bg-amber-50 w-[800px] h-16 text-3xl ' onClick={()=>setIsInventoryAdd(true)}>ADD ITEM</button>
      </div>

      <div className='border p-2 my-15 py-1.5'>
        <p className='title'>Inventory Update / Delete</p>
        <div className='flex justify-start gap-x-11 my-3'>
            <p className='label'>Find Inventory Items :</p>
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

      <div className='flex justify-around items-center w-full my-10'>
        <button className='option-btn'>ADD Measuring Units</button>
        <button className='option-btn'>Add Supplier</button>
        <button className='option-btn'>Stock Level</button>
      </div>
    {/* </div> */}
    </div>
  )
}
