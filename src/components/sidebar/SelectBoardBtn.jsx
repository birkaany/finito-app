import Icon from "../common/Icon";

const SelectBoardBtn = ({
  children,
  id,
  setActiveBoardBtn,
  activeBoardBtn,
}) => {
  const isActive = id == activeBoardBtn ? true : false;
  return (
    <button
      onClick={() => setActiveBoardBtn(id)}
      className={`px-6 py-4 w-5/6 text-mediumGrey flex items-center rounded-r-[6rem] gap-4 transition-all duration-300
      ${isActive ? "bg-primaryColor text-white" : ""}`}
    >
      <Icon iconName={"board"} color={isActive ? "white" : "#828FA3"} />

      {children}
    </button>
  );
};

export default SelectBoardBtn;
