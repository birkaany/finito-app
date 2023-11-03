import { useState } from "react";

function TextAreaInput({ name, value, onChange }) {
  return (
    <div className="form-group flex flex-col gap-2 w-full ">
      <label
        className="text-mediumGrey text-xs font-bold w-full capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="border-mediumGrey border rounded-md px-4 py-2 outline-primaryColor text-sm resize-none h-32"
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
      >
        {value}
      </textarea>
    </div>
  );
}

export default TextAreaInput;
