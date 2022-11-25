import Link from "next/link";
import styles from "./subnavbar.module.scss";

const SubNavbar = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.link}>
        <Link href="/series/current">Current</Link>
      </li>
      <li className={styles.link}>
        <Link href="/series/future">Future</Link>
      </li>
    </ul>
  );
};

export default SubNavbar;
