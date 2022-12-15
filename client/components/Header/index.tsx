import React from "react";
import styles from "../../styles/Home.module.scss";

interface Props {
  length: number;
}

const Header: React.FC<Props> = ({ length }) => {
  return (
    <div className={styles.header}>
      <h2>&#9782; Notes</h2>
      <p>{length}</p>
    </div>
  );
};

export default React.memo(Header);
