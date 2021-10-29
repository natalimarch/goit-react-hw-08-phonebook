import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (store) => store.contacts.items;

export const getFilter = (store) => store.contacts.filter;

// const getFilterList = () => {
//   const filterItem = filter.toLowerCase();
//   const filterContacts = contacts.filter((item) =>
//     item?.name?.toLowerCase().includes(filterItem)
//   );
//   return filterContacts;
// };

export const getFilterList = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterItem = filter.toLowerCase();
    const filterContacts = contacts.filter((item) =>
      item?.name?.toLowerCase().includes(filterItem)
    );
    return filterContacts;
  }
);
