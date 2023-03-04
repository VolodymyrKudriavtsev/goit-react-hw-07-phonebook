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
  extraReducers: builder => {
    builder
      .addCase(actions.fetchContactsRequest, store => {
        store.isLoading = true;
      })
      .addCase(actions.fetchContactsSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(actions.fetchContactsError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(actions.fetchAddContactRequest, store => {
        store.isLoading = true;
      })
      .addCase(actions.fetchAddContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(actions.fetchAddContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(actions.fetchDeleteContactRequest, store => {
        store.isLoading = true;
      })
      .addCase(actions.fetchDeleteContactSuccess, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(actions.fetchDeleteContactError, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
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
