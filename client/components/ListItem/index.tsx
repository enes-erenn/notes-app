import React from "react";
import { Note } from "../../types/types";

interface Props {
  note: Note;
}

const ListItem: React.FC<Props> = ({ note }) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  );
};

export default React.memo(ListItem);
