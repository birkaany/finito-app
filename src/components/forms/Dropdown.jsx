import React, { useState } from "react";
import { useSelector } from "react-redux";

function Dropdown() {
  return (
    <div className="dropdown relative">
      <button
        onClick={() => setOpen(!open)}
        value={selectedItem}
        className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm w-full text-left"
      >
        {value}
      </button>

      <ul className="menu absolute top-10 w-full flex flex-col">
        {activeBoard.columns.map(({ name: statusName }, index) => {
          return (
            <li className="menu-item " key={index}>
              <button
                name={name}
                className="bg-white border-mediumGrey border rounded-md px-4 py-2 text-sm w-full text-left"
                onClick={handleStatusChange}
                value={statusName}
              >
                {statusName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
