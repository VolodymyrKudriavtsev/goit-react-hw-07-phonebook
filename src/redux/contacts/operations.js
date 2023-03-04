import * as api from '../../services/contacts-api';

import * as actions from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsRequest());
      const data = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchContactsError(response.data.message));
    }
  };

  return func;
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      // const { contacts } = getState();
      // for (const contact of contacts.items) {
      //   if (data.name.toLowerCase() === contact.name.toLowerCase())
      //     return alert(`${data.name} is already in contacts.`);
      // }

      dispatch(actions.fetchAddContactRequest());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };

  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactRequest());
      await api.deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };

  return func;
};
