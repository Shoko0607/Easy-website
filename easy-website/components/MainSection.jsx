import styles from "./MainSection.module.css";
import Image from "next/image";

export default function MainSection() {
  return (
    <>
      <div className={styles.container}>
        <Image id= {styles.bg}
          src="/main-bg.png"
          alt="laptop, coffee, and book"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className={styles.trademark}>
          <Image
            id={styles.logo}
            src="/easy-edit-logo.png"
            alt="easy edit logo"
            width="310"
            height="106"
          />
          <h2>Your #1 provider of easy-level edit </h2>
        </div>
      </div>
    </>
  );
}
