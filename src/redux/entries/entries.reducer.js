import entriesActionTypes from "./entries.types";

const INITIAL_STATE = {
  entries: [],
  filteredEntries: [],
  filterString: ""
}

const entriesReducer = (state = INITIAL_STATE, action) => {  
  switch(action.type){
    case entriesActionTypes.GET_ENTRIES_SUCCESS:
      return {
        ...state,
        entries: action.payload
      }
    case entriesActionTypes.UPDATE_FILTER_STRING:
      return {
        ...state,
        filterString: action.payload
      }
    default:
      return state
  }
}

export default entriesReducer;