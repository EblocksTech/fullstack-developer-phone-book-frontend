import { all, call} from 'redux-saga/effects';

import { phonebookSagas } from './phonebook/phonebook.sagas';
import { entriesSagas } from './entries/entries.sagas';
import { notificationSagas } from './notifications/notification.sagas';

export default function* rootSaga() {
  yield all([
    call(phonebookSagas),
    call(entriesSagas),
    call(notificationSagas)
  ]);
}