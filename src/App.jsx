import Boards from "./components/boards/Boards";
import Modal from "./components/modal/Modal";
import { Header } from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import AddTaskForm from "./components/forms/AddTaskForm";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Modal>
        <AddTaskForm />
      </Modal>
      <div className="flex h-full items-start">
        <Sidebar />
        <Boards />
      </div>
    </div>
  );
}

export default App;
