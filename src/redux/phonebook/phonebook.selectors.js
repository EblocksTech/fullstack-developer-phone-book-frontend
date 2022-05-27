import { createSelector } from "reselect";

const selectPhonebook = state => {  
  return state.phonebook
}

export const selectPhonebooks = createSelector(
  [selectPhonebook],
  (phonebook) => phonebook.phonebooks    
);

export const selectSelectedPhonebook = createSelector(
  [selectPhonebook],
  (phonebook) => phonebook.selectedPhonebook
);