import { createStore } from "redux";
const contacts = {
  items: [],
  filter: "",
  };
const reducer = (state = contacts, { type, payload }) => {
  switch (type) {
    case "phoneBook/AddContact":
      return {
        ...state,
        items: [payload, ...state.items],
      };

    case "phoneBook/FilterChange":
      return { filter: payload };
    case "phoneBook/DeleteContact":
      return { items: state.items.filter(({ id }) => id !== payload) };
    default:
      return state;
  }
};

const store = createStore(reducer);
// const state ={
//
//   }
export default store;
