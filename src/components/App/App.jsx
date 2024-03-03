// import { ContactForm } from "../ContactForm/ContactForm";
// import { ContactList } from "../ContactList/ContactList";
// import { SearchBox } from "../SearchBox/SearchBox";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/operations";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { selectError, selectLoading } from "../../redux/selectors";
// import css from "./App.module.css";
// function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div className={css.container}>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {loading && <p>LOADING...</p>}
//       {error && <p>ERROR!</p>}
//       <ContactList />
//     </div>
//   );
// }

// export default App;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};
