import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/design1">Design 1</Link>
      <Link to="/design2">Design 2</Link>
      <Link to="/design3">Design 3</Link>
      <Link to="/design4">Design 4</Link>
    </nav>
  );
};
