import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Icon from "../common/Icon";
import Button from "../common/Button";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../redux/boardsSlice";
import { closeModal } from "../../redux/modalSlice";

function AddTaskForm() {
  const selectedBoard = useSelector((state) =>
    state.boards.boards.find((board) => board.isActive)
  );
  const dispatch = useDispatch();

  const statusList = selectedBoard.columns.map((column) => column.name);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    subtasks: [
      {
        title: "",
        isCompleted: false,
        id: uuidv4(),
      },
      {
        title: "",
        isCompleted: false,
        id: uuidv4(),
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
    dispatch(closeModal());
  }
  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmitForm}>
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
                required
                onChange={(e) => onChangeSubTask(subtask.id, e.target.value)}
              />
              <button
                type="button"
                className=""
                onClick={() => {
                  const updatedSubTasks = formValues.subtasks.filter(
                    (task) => task.id !== subtask.id
                  );
                  setFormValues((prevState) => {
                    return {
                      ...prevState,
                      subtasks: updatedSubTasks,
                    };
                  });
                }}
              >
                <Icon icon="cross-icon" size={20} color="gray" />
              </button>
            </div>
          );
        })}
        <Button
          type="button"
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
  );
}

export default AddTaskForm;
