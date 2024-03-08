import { useDispatch } from "react-redux";

import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/contacts/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={css.textFilter}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="search"
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
};
