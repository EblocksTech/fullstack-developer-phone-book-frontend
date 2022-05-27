import phonebookActionTypes from "./phonebook.types";

const INITIAL_STATE = {
  phonebooks: [
    {id: 0, name: "All"},
    {id: 2, name: "General"},
    {id: 3, name: "Neighbourhood"},
    {id: 3, name: "Bussiness Associates"},
    {id: 4, name: "Family"}
  ],
  selectedPhonebook: 0
}

const phonebookReducer = (state = INITIAL_STATE, action) => {  
  switch(action.type){
    case phonebookActionTypes.SET_SELECTED_PHONEBOOK:    
      return {
        ...state,
        selectedPhonebook: action.payload
      }
    default: 
      return state    
  }
}

export default phonebookReducer;  