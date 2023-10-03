import boardIcon from "../../assets/img/fluent_board-split-24-regular.svg";

const SelectBoardBtn = ({
  children,
  id,
  setActiveBoardBtn,
  activeBoardBtn,
}) => {
  const activeClass = id == activeBoardBtn ? "bg-primaryColor text-white" : "";
  return (
    <button
      onClick={() => setActiveBoardBtn(id)}
      className={`px-6 py-4 w-5/6 flex items-center rounded-r-[6rem] gap-4 
      ${activeClass}`}
    >
      <i>
        <img src={boardIcon}></img>
      </i>
      {children}
    </button>
  );
};

export default SelectBoardBtn;
