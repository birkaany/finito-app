import { useRef, useState } from "react";

import Icon from "../common/Icon";
import Button from "../common/Button";

import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/boardsSlice";

function AddTaskForm() {
  const selectedBoard = useSelector((state) =>
    state.boards.boards.find((board) => board.isActive)
  );
  const dispatch = useDispatch();
  const formRef = useRef();
  const statusList = selectedBoard.columns.map((column) => column.name);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    subtasks: [
      {
        title: "",
        isCompleted: false,
        id: crypto.randomUUID(),
      },
      {
        title: "",
        isCompleted: false,
        id: crypto.randomUUID(),
      },
    ],
    taskStatus: statusList[0],
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  function onChangeSubTask(id, newValue) {
    setFormValues((prevValues) => {
      const updatedSubTasks = prevValues.subtasks.map((subtask) => {
        if (subtask.id === id) {
          return { ...subtask, title: newValue };
        }
        return subtask;
      });

      return {
        ...prevValues,
        subtasks: updatedSubTasks,
      };
    });
  }
  function handleStatusChange(e) {
    setFormValues((prevState) => {
      return {
        ...prevState,
        taskStatus: e.target.value,
      };
    });
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(addTask(formValues));
  }
  return (
    <div className="flex bg-white p-8 rounded-md max-w-lg w-96 transition-all duration-200 flex-col items-start gap-6">
      <h2 className="font-bold text-lg">Add New Task</h2>
      <form
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmitForm}
        ref={formRef}
      >
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="title"
          >
            Title
          </label>
          <input
            name="title"
            required
            type="text"
            className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm"
            value={formValues.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm resize-none h-32"
            value={formValues.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="subtasks"
          >
            Subtasks
          </label>
          {formValues.subtasks.map((subtask, index) => {
            return (
              <div key={index} className="subtask flex items-center gap-4">
                <input
                  className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm w-full"
                  type="text"
                  name="subtask"
                  placeholder="e.g Make coffee"
                  value={subtask.title}
                  onChange={(e) => onChangeSubTask(subtask.id, e.target.value)}
                />
                <button
                  className=""
                  onClick={() => {
                    const newTask = subTasks.filter(
                      (task) => subtask.id !== task.id
                    );
                    setSubTasks(newTask);
                  }}
                >
                  <Icon icon="cross-icon" size={20} color="gray" />
                </button>
              </div>
            );
          })}
          <Button
            onClick={() => {
              setFormValues((prevState) => {
                const newSubTask = {
                  title: "",
                  isCompleted: false,
                  id: crypto.randomUUID(),
                };
                const updatedSubTasks = [...prevState.subtasks, newSubTask];
                return {
                  ...prevState,
                  subtasks: updatedSubTasks,
                };
              });
            }}
          >
            Add New Subtask
          </Button>
        </div>
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="status"
          >
            Status
          </label>
          <select
            value={formValues.taskStatus}
            onChange={handleStatusChange}
            className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm"
          >
            {statusList.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit">Create Task</Button>
      </form>
    </div>
  );
}

export default AddTaskForm;
