import { useState } from "react";

function Select({ value, setValue, options }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value="" disabled>
        지역을 선택해주세요.
      </option>
      {options.map((item, i) => (
        <option className="tag" key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
