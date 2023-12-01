function Modal({ children, title, show, onClose }) {
  return (
    show && (
      <div className="bg-black absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-opacity-50">
        <div className="relative">
          <button
            onClick={onClose}
            className="bg-black w-8 h-8 absolute -top-3 -right-3 rounded-full text-white"
          >
            x
          </button>
          <div className="flex bg-white p-8 rounded-md max-w-lg w-96 transition-all duration-200 flex-col items-start gap-6">
            <h2 className="font-bold text-lg">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
