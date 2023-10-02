import Button from "../common/Button";
import Logo from "./Logo";

export const Header = () => {
  return (
    <header className=" bg-white">
      <div className="wrapper flex items-center ">
        <div className="p-4 md:px-6 md:py-8 w-20 md:w-72 h-full">
          <Logo />
        </div>
        <div className=" flex flex-1 p-4 md:px-6 md:py-8 border-l border-linesLight">
          <div className="flex flex-1 justify-between items-center">
            <h2 className="text-textL md:text-textXl text-black font-bold">
              Platform Launch
            </h2>
            <Button>Add New Task</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
