export const isLoading = state => state.phonebook.loading;

export const isError = state => state.phonebook.error;

export const getFilterContacts = state => state.phonebook.value;

export const getContacts = state => state.phonebook.contacts;