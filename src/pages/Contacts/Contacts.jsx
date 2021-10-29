import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Phonebook from "../../components/Phonebook/Phonebook";
import { getPhonebook } from "../../redux/contacts";
import Box from "@mui/material/Box";
import styles from "./Contacts.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getPhonebook()), [dispatch]);

  return (
    <Box className={styles.container}>
      <Phonebook />
    </Box>
  );
}
