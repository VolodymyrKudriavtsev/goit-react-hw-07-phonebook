import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');

export const fetchAddContactRequest = createAction('contacts/add/request');
export const fetchAddContactSuccess = createAction('contacts/add/success');
export const fetchAddContactError = createAction('contacts/add/error');

export const fetchDeleteContactRequest = createAction(
  'contacts/delete/request'
);
export const fetchDeleteContactSuccess = createAction(
  'contacts/delete/success'
);
export const fetchDeleteContactError = createAction('contacts/delete/error');
