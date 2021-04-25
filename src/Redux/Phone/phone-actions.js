import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", ({ name, number }) => ({
  payload: { id: shortid.generate(), name, number },
}));

// ({ id, name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: { id: shortid.generate(), name, number },
//   x: 5,
// });
export const filterChange = createAction("contacts/filter");

// (payload) => ({
//   type: actionTypes.FILTER_CHANGE,
//   payload,
// });
export const deleteContact = createAction("contacts/delete");

// export default {addContact, filterChange, deleteContact };
