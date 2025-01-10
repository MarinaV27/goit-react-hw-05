import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const linkClass = ({ isActiv }) => {
  return clsx(css.link, isActiv && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/muvies" className={linkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
