import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"


export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Movies</NavLink>
      </nav>
    </header>
  );
}
