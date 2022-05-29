import { createSelector } from "reselect";

const selectEntries = state => {
  return state.entries
}

const selectState = state => {
  return state
}

export const selectAllEntries = createSelector(
  [selectEntries],
  (entries) => entries.entries
);

export const selectedPhonebookEntries = createSelector(
  [selectState],
  (state) => {    
    var filtered = state.entries.entries.filter(x => x.phonebookId === state.phonebook.selectedPhonebook)  
    return filtered;
  }
);

export const selectFilterString = createSelector(
  [selectEntries],
  (entries) => entries.filterString
);

export const selectSelectedPhonebook = createSelector(
 [selectEntries] ,
 (entries) => entries.selectedBook
);