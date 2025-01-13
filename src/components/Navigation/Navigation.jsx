import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildlinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildlinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildlinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
