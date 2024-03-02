import { useDispatch } from "react-redux";

import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="search"
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
};
