import CreateBoardBtn from "./CreateBoardBtn";
import SelectBoardBtn from "./SelectBoardBtn";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-72 bg-white h-full flex-col justify-between">
      <div className="all-boards">
        <h2 className="px-6 py-4 uppercase text-mediumGrey text-xs font-bold tracking-widest">
          All Boards<span>(3)</span>
        </h2>
        <div className="boards flex flex-col gap-3">
          <SelectBoardBtn>Platform Launch</SelectBoardBtn>
          <SelectBoardBtn>Platform Launch</SelectBoardBtn>
          <SelectBoardBtn>Platform Launch</SelectBoardBtn>
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
