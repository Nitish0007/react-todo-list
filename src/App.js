import React, { useState, useEffect } from "react";

import NotesContainer from "./Components/NotesContainer/NotesContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    const dummyNotes = [...notes];
    dummyNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 43),
      text: "",
      color: color,
      date: Date.now(),
    });
    setNotes(dummyNotes);
  };
  const removeNote = (uniqueID) => {
    const index = notes.findIndex((note) => note.id === uniqueID);
    const tempNotes = [...notes];
    if (index > -1) {
      tempNotes.splice(index, 1);
      setNotes(tempNotes);
    }
  };
  const setText = (text, id) => {
    const tempNotes = [...notes];
    tempNotes.map((note) => {
      if (note.id === id) {
        note.text = text;
      }
      return notes;
    });
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <h2 style={{ margin: "10px" }}>ToDo List</h2>
      <div className="app_body">
        <Sidebar addNote={addNote} />
        <NotesContainer
          notes={notes}
          removeNote={removeNote}
          setText={setText}
        />
      </div>
    </div>
  );
}

export default App;
