import entriesActionTypes from "./entries.types";

export const fetchEntries = () => ({
  type: entriesActionTypes.GET_ENTRIES_START
});

export const fetchEntriesSuccess = entries => ({
  type: entriesActionTypes.GET_ENTRIES_SUCCESS,
  payload: entries
});

export const fetchEntriesFailure = () => ({
  type: entriesActionTypes.GET_ENTRIES_FAILURE
});

export const updateFilterString = (string) => ({
  type: entriesActionTypes.UPDATE_FILTER_STRING,
  payload: string
});

