import { useState } from "react";

function TextInput({ name, type, value, onChange }) {
  return (
    <div className="form-group flex flex-col gap-2 w-full ">
      <label
        className="text-mediumGrey text-xs font-bold w-full capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm"
      />
    </div>
  );
}

export default TextInput;
