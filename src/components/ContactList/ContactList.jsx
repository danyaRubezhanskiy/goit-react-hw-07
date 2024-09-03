import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {filteredList.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
