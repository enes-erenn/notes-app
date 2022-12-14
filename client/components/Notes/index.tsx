import React, { useEffect, useState } from "react";
import axios from "axios";
import { Note } from "../../types/types";
import ListItem from "../ListItem";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      await axios.get(process.env.API_URL + "api/notes/").then(async (res) => {
        setNotes(res.data);
      });
    };
    return () => {
      getNotes();
    };
  }, []);

  return (
    <ul>
      {notes.map((note: Note) => (
        <ListItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default Notes;
