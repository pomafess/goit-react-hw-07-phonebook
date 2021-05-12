import { createAction } from '@reduxjs/toolkit';


export const fetchRequest = createAction('phonebook/FetchRequest');
export const fetchSuccess = createAction('phonebookFfetchSuccess');
export const fetchError = createAction('phonebook/FetchError');

export const addRequest = createAction('phonebook/AddRequest');
export const addSuccess = createAction('phonebook/AddSuccess');
export const addError = createAction('phonebook/AddError');


export const deleteContactRequest = createAction('phonebook/DeleteRequest');
export const deleteContactSuccess = createAction('phonebook/DeleteSuccess');
export const deleteContactError = createAction('phonebook/DeleteContactError');


export const changeFilter = createAction('phonebook/Get')

