import { useSelector } from "react-redux";
import CreateBoardBtn from "./CreateBoardBtn";
import SelectBoardBtn from "./SelectBoardBtn";

const Sidebar = () => {
  const boards = useSelector((state) => state.boards.boards);

  return (
    <aside className="hidden md:flex min-w-[18rem] bg-white h-full flex-col justify-between">
      <div className="all-boards">
        <h2 className="px-6 py-4 uppercase text-mediumGrey text-xs font-bold tracking-widest">
          All Boards<span>({boards.length})</span>
        </h2>
        <div className="boards flex flex-col gap-3">
          {boards.map(({ name, id }) => {
            return (
              <SelectBoardBtn key={id} id={id}>
                {name}
              </SelectBoardBtn>
            );
          })}

          <CreateBoardBtn>Create New Board</CreateBoardBtn>
        </div>
      </div>
      <footer className="flex flex-col px-6 py-4">
        <div className="theme-switcher flex justify-center py-3 bg-lightGrey rounded-md">
          Theme Switcher Placeholder
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
