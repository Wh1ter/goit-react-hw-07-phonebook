import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./app-actions";

const contacts = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    const contactExists = state.find(contact => contact.name === payload.name);

    if (contactExists) {
      alert(`${payload.name} - уже есть в списке :)`);
      return state;
    }
    return [payload, ...state];
  },
  [actions.deleteContactSuccess]: (state, { types, payload }) => {
    let newArrAfterDel = state.filter((elem) => elem.id !== payload);
    return [...newArrAfterDel];
  },
});

const filters = createReducer("", {
  [actions.filterSet]: (state, { payload }) => {
    return payload;
  },
});



const loading = createReducer(false, {
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,
});
/* const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER_SET:
      return payload;
    default:
      return state;
  }
}; */
// _ - parameter not used

export default combineReducers({ contacts, filters, loading });