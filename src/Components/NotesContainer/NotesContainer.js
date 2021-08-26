import React from "react";

import Notes from "../Notes/Notes";

import "./NotesContainer.css";

function NotesContainer(props) {
  const startFromLast = (arr) => {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  };
  const notes = startFromLast(props.notes);

  return (
    <div className="notes-container">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Notes
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            color={note.color}
            removeNote={props.removeNote}
            setText={props.setText}
          />
        ))
      ) : (
        <h3>Empty</h3>
      )}
    </div>
  );
}

export default NotesContainer;
