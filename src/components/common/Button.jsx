// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button className="bg-primaryColor flex items-center justify-center rounded-3xl px-6 py-3 text-white gap-2">
      <span>+</span>
      {children}
    </button>
  );
};

export default Button;
