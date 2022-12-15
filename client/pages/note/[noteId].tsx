import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Note } from "../../types/types";
import axios from "axios";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

const SingleNote = () => {
  const router = useRouter();
  const { noteId } = router.query;
  const [note, setNote] = useState<Note | null | false>(null);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    const getNote = async () => {
      await axios.get(process.env.API_URL + `notes/${noteId}/`).then((res) => {
        setNote(res.data);
      });
    };
    if (noteId) {
      getNote();
    }
  }, [noteId]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (note) {
      setNote({ ...note, body: e.target.value });
      setIsTouched(true);
    }
  };

  const updateNote = async () => {
    await axios
      .put(process.env.API_URL + `notes/${noteId}/update/`, note)
      .then(() => {
        router.push("/");
      });
  };

  // Render this initially
  if (note == null) {
    return <div>Loading...</div>;
  }

  // Render this if there is note which matches that id
  if (note) {
    return (
      <div className={styles.container}>
        <div className={styles.app}>
          <div className={styles.header}>
            <h1>Note</h1>
          </div>
          <div className={styles.note}>
            <div className={styles.control}>
              <Link href="/">
                <button className={styles.back}>Back</button>
              </Link>
              {isTouched && (
                <button className={styles.save} onClick={updateNote}>
                  Save
                </button>
              )}
            </div>

            <textarea
              name="body"
              onChange={handleChange}
              defaultValue={note?.body}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }

  // Render this if there is no note which matches that id
  return <div>Not found any note.</div>;
};

export default SingleNote;
