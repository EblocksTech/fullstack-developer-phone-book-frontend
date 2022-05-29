import { combineReducers } from 'redux';

import phonebookReducer from './phonebook/phonebook.reducer';
import entriesReducer from './entries/entries.reducer';

const rootReducer = () => combineReducers({
  phonebook: phonebookReducer,
  entries: entriesReducer
});

export default rootReducer