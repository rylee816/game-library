import React from "react";

function Pagination() {
  return (
    <div className="flex justify-center max-w-[75%] m-auto pb-12">
      <div className="join grid grid-cols-6 sm:text-sm">
        <button className="join-item btn btn-outline mr-1">Previous</button>
        <button className="join-item btn btn-active">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
        <button className="join-item btn btn-outline ml-[1px]">Next</button>
      </div>
    </div>
  );
}

export default Pagination;
