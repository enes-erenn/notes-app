import React, { useEffect, useState } from "react";
import axios from "axios";
import { Note } from "../../types/types";
import ListItem from "../ListItem";
import Header from "../Header";
import styles from "../../styles/Home.module.scss";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

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

  const addNote = async () => {
    await axios.post(process.env.API_URL + "notes/create", { body: note });
    await axios.get(process.env.API_URL + "notes/").then((res) => {
      setNotes(res.data);
      setIsAddingNote((prev) => !prev);
    });
  };

  return (
    <div className={styles.app}>
      <Header length={notes.length} />
      {isAddingNote ? (
        <div className={styles.editor}>
          <div className={styles.buttons}>
            <button
              className={styles.back}
              onClick={() => setIsAddingNote((prev) => !prev)}
            >
              Cancel
            </button>
            <div className={styles.controller}>
              <button className={styles.save} onClick={addNote}>
                Add
              </button>
            </div>
          </div>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNote(e.target.value)
            }
          ></textarea>
        </div>
      ) : (
        <ul className={styles.list}>
          {notes.map((note: Note) => (
            <ListItem key={note.id} note={note} />
          ))}
        </ul>
      )}
      {!isAddingNote && (
        <button
          onClick={() => setIsAddingNote((prev) => !prev)}
          className={styles.add}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Notes;
