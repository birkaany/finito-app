import { icons } from "../../assets/icons.json";

function Icon({ iconName, color = "black", ...props }) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d={icons[iconName].path}
          fill={color}
        />
      </g>
    </svg>
  );
}

export default Icon;
