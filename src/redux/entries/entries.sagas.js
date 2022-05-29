import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import entriesActionTypes from './entries.types';
import { fetchEntriesSuccess, fetchEntriesFailure } from './entries.actions';

export function* fetchEntriesAsync() {
  try {    
    const entries = yield axios.get("https://localhost:5001/entries");   
    yield put(fetchEntriesSuccess(entries.data));     
  } catch (error) {
    yield put(fetchEntriesFailure());     
  }
}

export function* onFetchEntriesStart(){
  yield takeLatest(entriesActionTypes.GET_ENTRIES_START, fetchEntriesAsync);
}

export function* entriesSagas() {
  yield all([
    call(onFetchEntriesStart)
  ])
}