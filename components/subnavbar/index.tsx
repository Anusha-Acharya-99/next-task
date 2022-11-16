import Link from "next/link";
import styles from "./subnavbar.module.scss";

const SubNavbar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link href="/series/current">Current</Link>
      </li>
      <li>
        <Link href="/series/future">Future</Link>
      </li>
    </ul>
  );
};

export default SubNavbar;
