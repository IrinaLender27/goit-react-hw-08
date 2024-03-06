import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/operations";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </div>
  );
}
