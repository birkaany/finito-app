import { useDispatch, useSelector } from "react-redux";
import Icon from "../common/Icon";
import { setActive } from "../../redux/boardsSlice";

const SelectBoardBtn = ({ children, id }) => {
  const selectedBoard = useSelector((state) =>
    state.boards.boards.find((board) => board.id === id)
  );

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setActive(id))}
      className={`px-6 py-4 w-5/6 text-mediumGrey flex items-center rounded-r-[6rem] gap-4 transition-all duration-300
      ${selectedBoard.isActive ? "bg-primaryColor text-white" : ""}`}
    >
      <Icon
        icon="board-icon"
        size={20}
        color={`${
          selectedBoard.isActive ? "bg-primaryColor" : "bg-mediumGray"
        }`}
      />
      {children}
    </button>
  );
};

export default SelectBoardBtn;
