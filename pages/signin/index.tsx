import styles from "./signin.module.scss";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/router";

const Signin = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userDetails.username,
      password: userDetails.password,
      redirect: false,
    });
    setUserDetails({ username: "", password: "" });
    if (res?.error) {
      setError("Invalid credentials");
    } else {
      setError("");
      router.push("/");
    }
  };
  return (
    <div className={styles.parentContainer}>
      <form className={styles.centerContainer} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>Username</label>
        <input
          type="text"
          name="username"
          value={userDetails.username}
          onChange={(e) =>
            setUserDetails({ ...userDetails, username: e.target.value })
          }
          className={styles.formInput}
          required
        />
        <label className={styles.formLabel}>Password</label>
        <input
          type="password"
          name="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          className={styles.formInput}
          required
          minLength={6}
        />
        {error && <small className={styles.error}>Invalid credentials</small>}
        <button type="submit" className={styles.signinButton}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
