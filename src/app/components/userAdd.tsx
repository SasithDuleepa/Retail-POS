import React from 'react'

const UserAdd: React.FC <{ Close : ()=>void }> = ({Close}) => {

    
  return (
    <div className="w-screen h-screen absolute top-0 left-0 px-10 py-5 z-50 flex items-center justify-center bg-[#a2a2a2ed]" onClick={Close}>
      <div className="w-5/6 h-5/6 bg-[#c3c3c3d8]" onClick={(e) => e.stopPropagation()}>
        <p className="title text-center">Add User</p>

        <div className='flex flex-col gap-5 my-10 px-40'>
            <div className='flex items-center justify-between'>
                <p className='label'>User Name :</p>
                <input type="text" className="input  w-lg h-10" />
            </div>
            <div className='flex items-center justify-between'>
                <p className='label'>Password :</p>
                <input type="text" className="input w-lg h-10" />
            </div>
        </div>

        <div className='px-10'>
            <p className='title'>Module Permissions</p>

            <div className='flex flex-wrap gap-5 my-10 px-40 justify-around'>

<div className='w-72 flex items-center gap-10'>
    <p className='label'>module name :</p>
    <input type="checkbox" className="size-6" />
</div>
<div className='w-72 flex items-center gap-10'>
    <p className='label'>module name :</p>
    <input type="checkbox" className="size-6" />
</div>
<div className='w-72 flex items-center gap-10'>
    <p className='label'>module name :</p>
    <input type="checkbox" className="size-6" />
</div>
<div className='w-72 flex items-center gap-10'>
    <p className='label'>module name :</p>
    <input type="checkbox" className="size-6" />
</div>

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

export default UserAdd;