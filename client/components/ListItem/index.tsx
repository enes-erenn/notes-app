import React from "react";
import Link from "next/link";
import { Note } from "../../types/types";

interface Props {
  note: Note;
}

const ListItem: React.FC<Props> = ({ note }) => {
  return (
    <Link href={`/note/${note.id}`}>
      <li>
        <h3>{note.body}</h3>
      </li>
    </Link>
  );
};

export default React.memo(ListItem);
