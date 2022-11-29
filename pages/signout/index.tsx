import { signOut } from "next-auth/react";
import styles from "./signout.module.scss";
import { useRouter } from "next/router";

const Signout = () => {
  const router = useRouter();
  return (
    <div className={styles.parentContainer}>
      <div className={styles.centerContainer}>
        <div>Are you sure you want to sign out?</div>
        <button
          className={styles.signoutButton}
          onClick={() => {
            signOut({ redirect: false });
            router.push("/");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Signout;
