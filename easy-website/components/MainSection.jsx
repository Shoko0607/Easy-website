import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <input className={styles.button} type="submit" value="send request" />
        </div>
      </div>
    </>
  );
}
