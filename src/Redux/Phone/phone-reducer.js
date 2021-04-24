import { combineReducers } from "redux";
import actionTypes from "./phone-type";
const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT: {
      return [...state, payload];
    }

    case actionTypes.DELETE_CONTACT: {
      return [...state.filter(({ id }) => id !== payload)];
    }
    default:
      return state;
  }
};
const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CHANGE:
      return payload;
    default:
      return state;
  }
};
export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
