import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.contact} key={id}>
          <Contact
            id={id}
            name={name}
            phone={phone}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
