function TaskCard({ task }) {
  const completedTasks = task.subtasks.filter((subtask) => {
    return subtask.isCompleted;
  });

  return (
    <div className="board-list mt-6 flex flex-col gap-5 min-w-[18rem]">
      <div className="board bg-white rounded-lg shadow-md px-4 py-6">
        <h3 className="text-black text-base font-bold">{task.title}</h3>
        <span className="text-xs font-bold text-mediumGrey">
          {completedTasks.length} of {task.subtasks.length} subtasks
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
