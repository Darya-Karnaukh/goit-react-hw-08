import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

import {
  selectGetError,
  selectGetIsLoading,
} from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectGetIsLoading);
  const error = useSelector(selectGetError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
