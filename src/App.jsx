import Boards from "./components/boards/Boards";
import { Header } from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex h-full items-start">
        <Sidebar />
        <Boards />
      </div>
    </div>
  );
}

export default App;
