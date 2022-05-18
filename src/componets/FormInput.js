import React from "react";

function FormInput({ name, label, id, placeholder, inputType }) {
  return (
    <div className="input-container">
      <label className="input-label" forHtml={name}>
        {label || name}
      </label>
      <input
        type={inputType || "text"}
        className="input-text"
        id={id || name}
        name={name}
        placeholder={placeholder || ""}
      />
    </div>
  );
}

export default FormInput;
