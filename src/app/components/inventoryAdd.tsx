import React from 'react'

const InventoryAdd: React.FC <{ Close : ()=>void }> = ({Close}) => {

    
  return (
    <div className="w-screen h-screen fixed px-10 py-5 z-50 flex items-center justify-center bg-[#a2a2a2ed]" onClick={Close}>
      <div className="w-5/6 h-5/6 bg-[#c3c3c3d8]" onClick={(e) => e.stopPropagation()}>
        <p className="title text-center">Add Inventory</p>

        <div className='flex flex-col gap-5 my-10 px-40'>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Name :</p>
                <input type="text" className="input  w-lg h-10" />
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Code :</p>
                <input type="text" className="input w-lg h-10" />
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Category :</p>
                <select className="input w-lg h-10" >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Purchased Price :</p>
                <input type="text" className="input w-lg h-10" />
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Selling Price :</p>
                <input type="text" className="input w-lg h-10" />
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Item Description :</p>
                <input type="text" className="input w-lg h-10" />
            </div>
        </div>

        
        
        <div className="w-full flex justify-around items-center">
          <button  className="btn">ADD</button>
          <button onClick={Close} className="btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryAdd;