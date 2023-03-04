import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetch/request');
export const fetchContactsSuccess = createAction('contacts/fetch/success');
export const fetchContactsError = createAction('contacts/fetch/error');
