import React, { useEffect, useState } from "react";
import axios from "axios";
import { Note } from "../../types/types";
import ListItem from "../ListItem";
import Header from "../Header";
import styles from "../../styles/Home.module.scss";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      await axios.get(process.env.API_URL + "notes/").then(async (res) => {
        setNotes(res.data);
      });
    };
    return () => {
      getNotes();
    };
  }, []);

  return (
    <div className={styles.app}>
      <Header length={notes.length} />
      <ul className={styles.list}>
        {notes.map((note: Note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default Notes;
