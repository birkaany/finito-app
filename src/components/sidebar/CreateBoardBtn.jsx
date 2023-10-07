import Icon from "../common/Icon";

const CreateBoardBtn = ({ children }) => {
  return (
    <button className=" text-primaryColor px-6 py-4 w-5/6 flex items-center justify-start text-left whitespace-nowrap rounded-r-[6rem] gap-4 truncate">
      <Icon iconName={"board"} />+{children}
    </button>
  );
};

export default CreateBoardBtn;
