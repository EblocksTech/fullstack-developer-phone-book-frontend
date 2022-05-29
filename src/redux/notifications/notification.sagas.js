import { takeLatest, put, all, call } from 'redux-saga/effects';
import uniqid from 'uniqid';

import { pushNotification } from './notification.actions';
import phonebookActionTypes from '../phonebook/phonebook.types';
import addPhoneBook from '../../pages/add-phone-book/add-phone-book';


export function* addPhoneBookSuccess(){
  yield put(pushNotification({title: `Success`, message: "Phonebook Added", id: uniqid()}));
}

export function* onAddPhonebook(){
  yield takeLatest(phonebookActionTypes.ADD_PHONEBOOK_SUCCESS, addPhoneBookSuccess)
}

export function* notificationSagas() {
  yield all([  
    call(onAddPhonebook)
  ])
} 