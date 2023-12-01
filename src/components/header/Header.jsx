import { useSelector } from "react-redux";
import Button from "../common/Button";
import Logo from "./Logo";
import AddTaskForm from "../forms/AddTaskForm";
import Modal from "../modal/Modal";
import { useState } from "react";

export const Header = () => {
  const selectedBoard = useSelector((state) => {
    if (state.length > 0) {
      state.boards.boards.find((board) => board.isActive);
    }
  });
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className=" bg-white">
        <div className="wrapper flex items-center ">
          <div className="p-4 md:px-6 md:py-8 w-20 md:w-72 h-full">
            <Logo />
          </div>
          <div className=" flex flex-1 p-4 md:px-6 md:py-8 border-l border-linesLight">
            <div className="flex flex-1 justify-between items-center">
              <h2 className="text-textL md:text-textXl text-black font-bold">
                {selectedBoard?.name}
              </h2>
              <Button onClick={() => setOpenModal(true)}>Add New Task</Button>
            </div>
          </div>
        </div>
      </header>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        title="Add New Task"
      >
        <AddTaskForm />
      </Modal>
    </>
  );
};
