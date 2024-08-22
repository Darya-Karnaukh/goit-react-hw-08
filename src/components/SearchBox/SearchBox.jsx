import { useDispatch, useSelector } from "react-redux";
import {
  filterContacts,
  filterNumberContacts,
} from "../../redux/filters/slice";
import s from "../SearchBox/SearchBox.module.css";
import {
  selectFilter,
  selectFilterNumber,
} from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectFilter);
  const number = useSelector(selectFilterNumber);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(filterContacts(value));
    dispatch(filterNumberContacts(value));
  };

  return (
    <div className={s.searchWrapper}>
      <label className={s.label}>
        <span>Find contacts by name or number</span>
        <input
          onChange={handleChange}
          name="filter-contact"
          type="text"
          value={name || number}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
