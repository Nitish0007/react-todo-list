import React, { useState } from "react";

import AddCircleIcon from "@material-ui/icons/AddCircle";

import "./Sidebar.css";

function Sidebar(props) {
  const [isOpen, setIsopen] = useState(false);

  const colors = ["magenta", "yellowgreen", "tomato", "lightskyblue", "pink"];

  return (
    <div className="sidebar">
      <AddCircleIcon
        className="sidebar_plus-icon"
        onClick={() => setIsopen(!isOpen)}
      />
      <div
        className={` ${
          isOpen ? "sidebar_color-section_active" : "sidebar_color-section"
        }`}
      >
        {colors.map((item, index) => {
          return (
            <div
              key={index}
              className="sidebar_color-section_color"
              style={{ backgroundColor: `${item}` }}
              onClick={() => {
                props.addNote(item);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
