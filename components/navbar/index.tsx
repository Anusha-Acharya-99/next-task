import Link from "next/link";
import styles from "./navbar.module.scss";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        Lorem
      </Link>
      <ul
        className={`${styles.linkContainer} ${
          status === "loading" ? styles.loading : styles.loaded
        }`}
      >
        <li className={styles.link}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.link}>
          <Link href="/package">Package</Link>
        </li>
        <li className={styles.link}>
          <Link href="/series">Series</Link>
        </li>
        {status === "unauthenticated" && (
          <li className={styles.link}>
            <Link href="/signin"> Sign in</Link>
          </li>
        )}
        {status === "authenticated" && (
          <li className={styles.link}>
            <Link href="/signout">Sign out</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
