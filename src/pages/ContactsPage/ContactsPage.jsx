import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import css from "./ContactsPage.module.css";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts}>
      <p className={css.contactsTitle}>Your contacts</p>
      <div>{isLoading && "Request in progress..."}</div>
      <div className={css.contactsBox}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
