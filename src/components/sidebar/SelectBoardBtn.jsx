import boardIcon from "../../assets/img/fluent_board-split-24-regular.svg";

const SelectBoardBtn = ({ children }) => {
  return (
    <button className="bg-primaryColor text-white px-6 py-4 w-5/6 flex items-center rounded-r-[6rem] gap-4">
      <i>
        <img src={boardIcon}></img>
      </i>
      {children}
    </button>
  );
};

export default SelectBoardBtn;
