import { all, call} from 'redux-saga/effects';

import { phonebookSagas } from './phonebook/phonebook.sagas';
import { entriesSagas } from './entries/entries.sagas';

export default function* rootSaga() {
  yield all([
    call(phonebookSagas),
    call(entriesSagas)
  ]);
}