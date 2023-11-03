import { useRef, useState } from "react";
import Icon from "../common/Icon";
import Button from "../common/Button";

function AddTaskForm() {
  const formRef = useRef();
  const [subTasks, setSubTasks] = useState([
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
  ]);
  const statusList = ["Seçenek 1", "Seçenek 2", "Seçenek 3"];
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  function onChangeSubTask(id, newValue) {
    setSubTasks((prevState) => {
      const newState = [...prevState];
      const subtask = newState.find((subtask) => subtask.id === id);
      subtask.title = newValue;
      return newState;
    });
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.entries(formData.entries());
    console.log(data);
    data.subTasks = subTasks;
    data.selectedStatus = selectedStatus;
    console.log(data);
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
            type="text"
            className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm"
          />
        </div>
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="description"
          >
            Description
          </label>
          <textarea className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm resize-none h-32"></textarea>
        </div>
        <div className="form-group flex flex-col gap-2 w-full ">
          <label
            className="text-mediumGrey text-xs font-bold w-full capitalize"
            htmlFor="subtasks"
          >
            Subtasks
          </label>
          {subTasks.map((subtask, index) => {
            return (
              <div key={index} className="subtask flex items-center gap-4">
                <input
                  className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm w-full"
                  type="text"
                  name="subtask-input"
                  placeholder="e.g Make coffee"
                  value={subtask.title}
                  onChange={(e) => {
                    onChangeSubTask(subtask.id, e.target.value);
                  }}
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
              setSubTasks((prevState) => {
                const newTasks = [
                  ...prevState,
                  {
                    title: "",
                    isCompleted: false,
                    id: crypto.randomUUID(),
                  },
                ];
                return newTasks;
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
            value={selectedStatus}
            onChange={handleStatusChange}
            className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm"
          >
            <option value="">Seçiniz</option>
            {statusList.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
}

export default AddTaskForm;
