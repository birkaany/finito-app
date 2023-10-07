import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

function Boards() {
  const selectedBoard = useSelector((state) =>
    state.boards.boards.find((board) => board.isActive)
  );

  return (
    <main className="p-6">
      <div className="flex gap-6 items-start justify-start">
        {selectedBoard.columns.map((column, index) => {
          return (
            <div className="w-72" key={index}>
              <div className="board-title flex items-center gap-3">
                <i className="bg-red rounded-full w-4 h-4"></i>
                <h2 className="text-xs  tracking-widest text-mediumGrey font-bold">
                  {column.name} ({column.tasks.length})
                </h2>
              </div>
              {column.tasks.map((task, index) => {
                return <TaskCard key={index} task={task} />;
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Boards;
