import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchPhonebooksSuccess, fetchPhonebooksFailure, addPhoneBookSuccess, addPhoneBookFailure,
  fetchPhonebooks } from './phonebook.actions';
import axios from 'axios';
import { push } from "connected-react-router";

import phonebookActionTypes from './phonebook.types';


export function* fetchPhonebooksAsync(){
  try {            
    const phonebooks = yield axios.get("https://localhost:5001/phonebooks");        
    yield put(fetchPhonebooksSuccess(phonebooks.data));      
  } catch (error) {
      yield put(fetchPhonebooksFailure());
  }
}

export function* addPhoneBookAsync({payload}) {
  try {    
    const addOpperation = yield axios.post("https://localhost:5001/phonebooks", {name: payload});        
    yield put(addPhoneBookSuccess());
    yield put(fetchPhonebooks())
    yield put(push('/'));
  } catch (error) {
    yield put(addPhoneBookFailure())
  }
}

export function* onFetchPhonebookStart() {  
  yield takeLatest(phonebookActionTypes.GET_PHONEBOOKS_START, fetchPhonebooksAsync);
}

export function* onAddPhonebook() {
  yield takeLatest(phonebookActionTypes.ADD_PHONEBOOK_START, addPhoneBookAsync);
}

export function* phonebookSagas() {
  yield all([
    call(onFetchPhonebookStart),
    call(onAddPhonebook),    
  ])
}