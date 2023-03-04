import { createSlice } from '@reduxjs/toolkit';

import * as actions from './actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [actions.fetchContactsRequest]: store => {
      store.loading = true;
    },
    [actions.fetchContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [actions.fetchContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [actions.fetchAddContactRequest]: store => {
      store.loading = true;
    },
    [actions.fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [actions.fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [actions.fetchDeleteContactRequest]: store => {
      store.loading = true;
    },
    [actions.fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(item => item.id === payload);
      store.items.splice(index, 1);
    },
    [actions.fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsSlice.reducer;

//Selectors
export const selectContacts = ({ contacts }) => contacts.items;

export const selectFilteredContacts = ({ contacts, filter }) => {
  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
