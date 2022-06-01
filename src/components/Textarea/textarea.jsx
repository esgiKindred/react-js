import React from "react";
import "./styles.css";

export default function Textarea({ placeholder }) {
  return (
    <div className="control">
      <textarea class="textarea" placeholder={placeholder}></textarea>
    </div>
  );
}
