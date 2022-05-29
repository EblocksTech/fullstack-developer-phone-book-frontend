import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchPhonebooksSuccess, fetchPhonebooksFailure } from './phonebook.actions';
import axios from 'axios';

import phonebookActionTypes from './phonebook.types';


export function* fetchPhonebooksAsync(){
  try {            
    const phonebooks = yield axios.get("https://localhost:5001/phonebooks");        
    yield put(fetchPhonebooksSuccess(phonebooks.data));
  } catch (error) {
      yield put(fetchPhonebooksFailure());

  }
}

export function* onFetchPhonebookStart() {  
  yield takeLatest(phonebookActionTypes.GET_PHONEBOOKS_START, fetchPhonebooksAsync);
}

export function* phonebookSagas() {
  yield all([
    call(onFetchPhonebookStart)
  ])
}