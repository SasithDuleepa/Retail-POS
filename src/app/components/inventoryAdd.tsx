import React from 'react'

const InventoryAdd: React.FC <{ Close : ()=>void }> = ({Close}) => {

    
  return (
    <div className="w-screen h-screen fixed px-10 py-5 z-50 flex items-center justify-center bg-[#d1d1d1be]" onClick={Close}>
      <div className="w-5/6 h-5/6 bg-[#c3c3c3d8]" onClick={(e) => e.stopPropagation()}>
        <p className="title text-center">Add Inventory</p>
        
        <div className="w-full flex justify-around items-center">
          <button  className="btn">ADD</button>
          <button onClick={Close} className="btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryAdd;