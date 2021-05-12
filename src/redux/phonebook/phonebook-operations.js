import axios from 'axios';
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
} from './phonebook-actions';


axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContact = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addContact = (name, number) => dispatch => {
    const contact = { name, number };

    dispatch(addRequest())
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addSuccess(data)),)
        .catch(error => dispatch(addError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};