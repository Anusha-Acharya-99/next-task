import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        Lorem
      </Link>
      <ul className={styles.linkContainer}>
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/package">Package</Link>
        </li>
        <li className={styles.link}>
          <Link href="/series">Series</Link>
        </li>
        <li className={styles.link}>
          <Link href="/signin">Sign in</Link>
        </li>
        <li className={styles.link}>
          <Link href="/signout">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
