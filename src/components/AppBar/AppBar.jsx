import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "../AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <nav>
          <Navigation />
          {!isLoggedIn && <AuthNav />}

          {isLoggedIn && <UserMenu />}
        </nav>
      </header>
    </>
  );
}

export default AppBar;
