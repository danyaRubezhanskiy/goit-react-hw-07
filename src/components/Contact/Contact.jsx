import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <p className={css.contactInformation}>🙍‍♂️ {name}</p>
      <p className={css.contactInformation}>📞 {number}</p>
      <button onClick={handleDelete} className={css.deleteBtn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
