import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navContainer}>
      <li>
        <NavLink className={styles.navLink} to="/">
          Перевірити ТТН
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink className={styles.navLink} to="/departments">
          Список відділень
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
