import phonebookActionTypes from "./phonebook.types";

export const setSelectedPhonebook = (phonebook) => ({
  type: phonebookActionTypes.SET_SELECTED_PHONEBOOK,
  payload: phonebook
});