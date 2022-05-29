import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import phonebookReducer from './phonebook/phonebook.reducer';
import entriesReducer from './entries/entries.reducer';
import notificationReducer from '../redux/notifications/notification.reducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  phonebook: phonebookReducer,
  entries: entriesReducer,
  notification: notificationReducer
});

export default rootReducer