import React from "react";
import Link from "next/link";
import { Note } from "../../types/types";

interface Props {
  note: Note;
}

const ListItem: React.FC<Props> = ({ note }) => {
  const title = note.body.split("\n")[0].slice(0, 45);
  const others = note.body.replace(title, "").slice(0, 45);
  const date = new Date(note.updated).toLocaleDateString();

  return (
    <Link href={`/note/${note.id}`}>
      <li>
        <h3>{title}</h3>
        <div>
          <span>{date}</span>
          <p>{others} ...</p>
        </div>
      </li>
    </Link>
  );
};

export default React.memo(ListItem);
