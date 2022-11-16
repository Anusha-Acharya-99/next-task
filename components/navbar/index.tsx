import Link from "next/link";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        Lorem
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/package">Package</Link>
        </li>
        <li>
          <Link href="/series">Series</Link>
        </li>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
        <li>
          <Link href="/signout">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
