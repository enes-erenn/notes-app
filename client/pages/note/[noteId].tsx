import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Note } from "../../types/types";
import axios from "axios";

const SingleNote = () => {
  const router = useRouter();
  const { noteId } = router.query;
  const [note, setNote] = useState<Note | null | false>(null);

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

  // Render this initially
  if (note == null) {
    return <div>Loading...</div>;
  }

  // Render this if there is note which matches that id
  if (note) {
    return (
      <div>
        <p>{note.body}</p>
      </div>
    );
  }

  // Render this if there is no note which matches that id
  return <div>Not found any note.</div>;
};

export default SingleNote;
