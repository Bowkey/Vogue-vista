import React, { useState } from "react";

/**
 * A React component that starts as a text input
 * and changes to a date picker when clicked.
 */
function ClickToDateInput() {
  const [inputType, setInputType] = useState("text");
  const [value, setValue] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Change type to date on click
  const handleClick = () => {
    setInputType("date");
  };

  return (
    <div style={{fontFamily: "Arial" }}>
      <input
        id="dateInput"
        name="DoB"
        type={inputType}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        placeholder="Date of Birth"
        style={{
          padding: "8px",
          borderBottom: "1px solid #ccc",
          width: "100%",}}
      />
    </div>
  );
}
export default ClickToDateInput;