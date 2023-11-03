import { useState } from "react";

function Modal({ children }) {
  const [openModal, setOpenModal] = useState(true);

  return (
    openModal && (
      <div className="bg-black fixed w-full h-screen flex justify-center items-center bg-opacity-50">
        <div className="relative">
          <button
            onClick={() => setOpenModal(false)}
            className="bg-black w-8 h-8 absolute -top-3 -right-3 rounded-full text-white"
          >
            x
          </button>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
