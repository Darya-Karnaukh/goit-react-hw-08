import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "../UserMenu/UserMenu.module.css";
import { logoutThunk } from "../../redux/auth/operations";
function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.menu}>
      <p>Hello, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
