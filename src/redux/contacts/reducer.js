import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
import { combineReducers } from "redux";

const itemsReducer = createReducer([], {
  [actions.addToPhonebookSuccess]: (store, { payload }) => {
    const newContact = { ...payload };
    store.push(newContact);
  },
  [actions.getPhonebookContactsSuccess]: (_, { payload }) => payload,
  [actions.removeFromPhonebookSuccess]: (store, { payload }) => {
    const idx = store.findIndex(({ id }) => id === payload);
    store.splice(idx, 1);
  },
});

const filterReducer = createReducer("", {
  [actions.filterPhonebook]: (_, { payload }) => payload,
});

const error = createReducer("", {
  [actions.getPhonebookContactsError]: (_, { payload }) => payload,
  [actions.addToPhonebookError]: (_, { payload }) => payload,
  [actions.removeFromPhonebookError]: (_, { payload }) => payload,
  [actions.getPhonebookContactsRequest]: () => "",
  [actions.addToPhonebookRequest]: () => "",
  [actions.removeFromPhonebookRequest]: () => "",
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error,
});

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };

// const itemsReducer = (
//   store = initialState.contacts.items,
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.ADD_TO_PHONEBOOK:
//       const newContact = { ...payload, id: generate() };
//       return [...store, newContact];

//     case types.REMOVE_FROM_PHONEBOOK:
//       const updateContacts = store.filter((item) => item.id !== payload);
//       return updateContacts;

//     default:
//       return store;
//   }
// };

// const filterReducer = (
//   store = initialState.contacts.filter,
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.FILTER_PHONEBOOK:
//       return payload;

//     default:
//       return store;
//   }
// };
