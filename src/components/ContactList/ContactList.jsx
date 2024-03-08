import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
