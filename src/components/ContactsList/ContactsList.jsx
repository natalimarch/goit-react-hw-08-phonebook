import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonebook } from "../../redux/contacts/operations";
import { getFilterList } from "../../redux/contacts/selectors";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const filterList = useSelector(getFilterList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonebook());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.List}>
        {filterList.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
