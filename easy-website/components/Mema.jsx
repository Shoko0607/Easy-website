import styles from "./Mema.module.css";
import Image from "next/image";

export default function Mema() {
  return (
    <>
        <div className={styles.container}>
            <Image src="/easy-edit-logo.png"
            width ="100"
            height ="1000" 
            />
        </div>
    </>
  );
}
