import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/design1">
        Design 1
      </Link>
      <Link className={styles.link} to="/design2">
        Design 2
      </Link>
      <Link className={styles.link} to="/design3">
        Design 3
      </Link>
      <Link className={styles.link} to="/design4">
        Design 4
      </Link>
      <Link className={styles.link} to="/design5">
        Design 5
      </Link>
    </nav>
  );
};
