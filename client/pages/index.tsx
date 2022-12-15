import Notes from "../components/Notes";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Notes />
    </div>
  );
}
