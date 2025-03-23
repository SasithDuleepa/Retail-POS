import React from "react";



const ItemCategorySearch: React.FC <{ Close : ()=>void }> = ({Close}) => {
  return (
    <div className="w-screen h-screen absolute px-10 py-5 z-50 flex items-center justify-center bg-[#a5a5a5be]" onClick={Close}>
      <div className="w-5/6 h-5/6 bg-amber-50" onClick={(e) => e.stopPropagation()}>
        <p className="title text-center">Item Search by Category</p>
        
        <div className="w-full flex justify-around items-center">
          <button  className="btn">ADD</button>
          <button onClick={Close} className="btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCategorySearch;
