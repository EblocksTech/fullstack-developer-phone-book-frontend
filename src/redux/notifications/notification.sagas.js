import { takeLatest, put, all, call } from 'redux-saga/effects';
import uniqid from 'uniqid';

import { pushNotification } from './notification.actions';
import phonebookActionTypes from '../phonebook/phonebook.types';
import entriesActionTypes from '../entries/entries.types';

import addPhoneBook from '../../pages/add-phone-book/add-phone-book';


export function* addPhoneBookSuccess(){
  yield put(pushNotification({title: `Success`, message: "Phonebook Added", id: uniqid()}));
}

export function* addPhoneBookFailure(){
  yield put(pushNotification({title: `Error`, message: "Phonebook Creation Failed", id: uniqid(), level: "error"}));
}

export function* addEntrySuccess(){
  yield put(pushNotification({title: `Success`, message: "Entry Added", id: uniqid()}));
}

export function* addEntryFail(){
  yield put(pushNotification({title: `Success`, message: "Entry Creation Failed", id: uniqid(), level: "error"}));
}

export function* onAddPhonebook(){
  yield takeLatest(phonebookActionTypes.ADD_PHONEBOOK_SUCCESS, addPhoneBookSuccess)
}

export function* onAddPhonebookFail(){
  yield takeLatest(phonebookActionTypes.ADD_PHONEBOOK_FAILURE, addPhoneBookFailure)
}

export function* onAddAntry(){
  yield takeLatest(entriesActionTypes.ADD_ENTRY_SUCCESS, addEntrySuccess)
}

export function* onAddAntryFail(){
  yield takeLatest(entriesActionTypes.ADD_ENTRY_FAILURE, addEntryFail)
}

export function* notificationSagas() {
  yield all([  
    call(onAddPhonebook),
    call(onAddPhonebookFail),
    call(onAddAntry),
    call(onAddAntryFail)
  ])
} 