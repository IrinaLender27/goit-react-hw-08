import { createSelector } from "@reduxjs/toolkit";

export const getContacs = (state) => state.contacts.items;

export const getFilter = (state) => state.filters.name.toLowerCase();

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacs, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
