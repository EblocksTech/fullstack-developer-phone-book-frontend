import phonebookActionTypes from "./phonebook.types";

export const setSelectedPhonebook = (phonebook) => ({
  type: phonebookActionTypes.SET_SELECTED_PHONEBOOK,
  payload: phonebook
});

export const fetchPhonebooks = () => ({
  type: phonebookActionTypes.GET_PHONEBOOKS_START
});

export const fetchPhonebooksSuccess = phonebooks => ({
  type: phonebookActionTypes.GET_PHONEBOOKS_SUCCESS,
  payload: phonebooks
});

export const fetchPhonebooksFailure = () => ({
  type: phonebookActionTypes.GET_PHONEBOOKS_FAILURE
});

export const addPhoneBookStart = (name) => ({
  type: phonebookActionTypes.ADD_PHONEBOOK_START,
  payload: name
});

export const addPhoneBookSuccess = () => ({
  type: phonebookActionTypes.ADD_PHONEBOOK_SUCCESS
});

export const addPhoneBookFailure = () => ({
  type: phonebookActionTypes.ADD_PHONEBOOK_FAILURE
});
