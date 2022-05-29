import phonebookActionTypes from "./phonebook.types";

const INITIAL_STATE = {
  phonebooks: [],
  selectedPhonebook: 0
}

const phonebookReducer = (state = INITIAL_STATE, action) => {      
  switch(action.type){
    case phonebookActionTypes.SET_SELECTED_PHONEBOOK:    
      return {
        ...state,
        selectedPhonebook: action.payload
      }
    case phonebookActionTypes.GET_PHONEBOOKS_SUCCESS:
      return { 
        ...state,       
        phonebooks: action.payload,
        selectedPhonebook: action.payload[0]['id']
      }
    default: 
      return state    
  }
}

export default phonebookReducer;  