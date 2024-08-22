import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filter.filter.name;
export const selectFilterNumber = (state) => state.filter.filter.number;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter, selectFilterNumber],
  (contacts, nameFilter, numberFilter) => {
    const nameFilterLower = nameFilter.toLowerCase();
    const numberFilterLower = numberFilter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(nameFilterLower) ||
        contact.number.toLowerCase().includes(numberFilterLower)
    );
  }
);
