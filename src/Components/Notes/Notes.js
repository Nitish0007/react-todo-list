import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

import "./Notes.css";

function Notes(props) {
  let timer;
  const debounce = (e, props) => {
    clearTimeout(timer);
    setTimeout(() => {
      props.setText(e.target.value, props.id);
    }, 700);
  };

  const setDate = (timestamp) => {
    if (!timestamp) return "";
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes();
    let ampm = hours > 12 ? "PM" : "AM";
    min = min < 10 ? "0" + min : min;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    return `${hours}:${min} ${ampm}, ${day}-${months[month + 1]}-${year}`;
  };

  return (
    <div className="notes" style={{ backgroundColor: `${props.color}` }}>
      <textarea
        className="notes_textarea"
        defaultValue={props.text}
        onChange={(e) => debounce(e, props)}
      />
      <div className="notes_bottom">
        <span className="notes_bottom_date">{setDate(props.date)}</span>
        <DeleteIcon
          className="notes_bottom_icon"
          onClick={() => {
            props.removeNote(props.id);
          }}
        />
      </div>
    </div>
  );
}

export default Notes;
