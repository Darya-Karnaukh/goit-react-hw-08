import { NavLink } from "react-router-dom";
import s from "../AuthNav/AuthNav.module.css";

function AuthNav() {
  return (
    <div className={s.nav}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
}

export default AuthNav;
