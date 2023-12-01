import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import Button from "../common/Button";
import Modal from "../modal/Modal";

import ViewTaskForm from "../forms/ViewTaskForm";
import { useState } from "react";

function Boards() {
  const selectedBoard = useSelector((state) =>
    state.boards.boards.find((board) => board.isActive)
  );
  const [openModal, setOpenModal] = useState(false);
  const boardsLength = useSelector((state) => state.boards.boards.length);
  if (boardsLength < 1) {
    return (
      <main className="flex flex-col justify-center items-center w-full h-[calc(100vh-7rem)] gap-6 text-mediumGrey">
        <p>This board is empty. Create a new column to get started.</p>
        <Button>Add New Column</Button>
      </main>
    );
  }

  if (boardsLength > 0) {
    return (
      <>
        <main className="p-6 overflow-x-scroll h-[calc(100vh-7rem)] w-full">
          <div className="flex gap-6 items-start justify-start">
            {selectedBoard.columns.map((column, index) => {
              return (
                <div className="w-72" key={index}>
                  <div className="board-title flex items-center gap-3">
                    <i className="bg-red rounded-full w-4 h-4"></i>
                    <h2 className="text-xs uppercase tracking-widest text-mediumGrey font-bold">
                      {column.name} ({column.tasks.length})
                    </h2>
                  </div>
                  {column.tasks.map((task, index) => {
                    return (
                      <TaskCard
                        onClick={() => setOpenModal(true)}
                        key={index}
                        task={task}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </main>
        <Modal
          title="Task Details"
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <ViewTaskForm />
        </Modal>
      </>
    );
  }
}

export default Boards;
