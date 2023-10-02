import logo from "../../assets/img/logo.svg";
import logoIcon from "../../assets/img/logo-icon.svg";

const Logo = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={logoIcon} />
      <img src={logo} alt="Logo" className="max-h-[3rem]" />
    </picture>
  );
};

export default Logo;
