import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    fetchRequest,
    fetchSuccess,
    fetchError,
    addRequest,
    addSuccess,
    addError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
} from './phonebook-actions';

const contacts = createReducer([], {
    [fetchSuccess]: (state, { payload }) => payload,
    [addSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
})


const loading = createReducer(false, {
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,
  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  
});

const value = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

const error = createReducer(null, {});
 
const bookReducer = combineReducers({
    contacts,
    loading,
    error,
    value
});

export default bookReducer