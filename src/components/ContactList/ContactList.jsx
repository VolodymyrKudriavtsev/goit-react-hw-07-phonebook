import { useSelector, useDispatch } from 'react-redux';

import ContactItem from 'components/ContactItem';

import { getFilteredContacts, deleteContact } from 'redux/contacts/slice';

import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      handleDeleteContact={() => dispatch(deleteContact(id))}
    />
  ));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      {isContacts && (
        <Contacts>
          <ul>{elements}</ul>
        </Contacts>
      )}
    </>
  );
};

export default ContactList;
