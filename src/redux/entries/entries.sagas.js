import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import { push } from "connected-react-router";

import entriesActionTypes from './entries.types';
import { fetchEntriesSuccess, fetchEntriesFailure, fetchEntries, addEntrySuccess, addEntryFail } from './entries.actions';
import config from "../../env";

export function* fetchEntriesAsync() {
  try {    
    const entries = yield axios.get(`${config.baseUrl}/entries`);   
    yield put(fetchEntriesSuccess(entries.data));     
  } catch (error) {
    yield put(fetchEntriesFailure());     
  }
}

export function* addEntryAsync({payload}) {
  try {    
    const opperation = yield axios.post(`${config.baseUrl}/entries`, payload);   
    yield put(addEntrySuccess());
    yield put(fetchEntries());    
    yield put(push('/')); 
  } catch (error) {
    yield put(addEntryFail());     
  }
}


export function* onFetchEntriesStart(){
  yield takeLatest(entriesActionTypes.GET_ENTRIES_START, fetchEntriesAsync);
}

export function* onAddEntryStart( ){
  yield takeLatest(entriesActionTypes.ADD_ENTRY_START, addEntryAsync);
}

export function* entriesSagas() {
  yield all([
    call(onFetchEntriesStart),
    call(onAddEntryStart)
  ])
}