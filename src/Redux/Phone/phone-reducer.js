import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./phone-actions"

const itemReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],

  [actions.deleteContact]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const filterReducer = createReducer("", {
  [actions.filterChange]: (state, { payload }) => payload,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
