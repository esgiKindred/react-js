import React from "react";
import "./styles.css";

export default function Input({ placeholder }) {
  return (
    <div className="control">
      <input className="input" type="text" placeholder={placeholder} />
    </div>
  );
}
