import shortid from "shortid";
import actionTypes from "./phone-type";

export const addContact = ({ id, name, number }) => ({
  type: actionTypes.ADD_CONTACT,
  payload: { id: shortid.generate(), name, number },
  x: 5,
});
export const filterChange = (payload) => ({
  type: actionTypes.FILTER_CHANGE,
  payload,
});
export const deleteContact = (payload) => ({
  type: actionTypes.DELETE_CONTACT,
  payload,
});
