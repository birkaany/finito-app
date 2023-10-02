import boardIcon from "../../assets/img/fluent_board-split-24-regular.svg";

const CreateBoardBtn = ({ children }) => {
  return (
    <button className=" text-primaryColor px-6 py-4 w-5/6 flex items-center justify-start text-left whitespace-nowrap rounded-r-[6rem] gap-4 truncate">
      <i>
        <img src={boardIcon} className=" brightness-0 fill-primaryColor"></img>
      </i>
      +{children}
    </button>
  );
};

export default CreateBoardBtn;
