import { combineReducers } from 'redux';

import phonebookReducer from './phonebook/phonebook.reducer';

const rootReducer = () => combineReducers({
  phonebook: phonebookReducer
});

export default rootReducer