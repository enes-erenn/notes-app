import Header from "../components/Header";
import Notes from "../components/Notes";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Notes />
    </div>
  );
}
