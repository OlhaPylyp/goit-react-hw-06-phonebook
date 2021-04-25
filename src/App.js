import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";
import Section from "./Components/Section";
import { connect } from "react-redux";
import store from "./Redux/store";
import * as actions from "./Redux/Phone/phone-actions";

function App({ items, filter, onAddContact }) {
  //  store.dispatch(filterChange(5))
  // state = {
  //   contacts: [],
  //   filter: "",
  // };
  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   console.log(" componentDidMount", contacts);
  //   if (contacts) {
  //     this.setState({ contacts: contacts });
  //   }
  // }
  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts)
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // }
  // addContact = ({ name, number }) => {
  //   // console.log("this.state.contacts",this.state.contacts)
  //   const sameName = this.state.contacts.some((item) => item.name === name);
  //   console.log("sameName", sameName);

  //   if (sameName) {
  //     window.alert(`LocalHost:3000 says ${name} is already in contact`);
  //     return;
  //   }
  //   let contact = {
  //     name,
  //     number: number,
  //     id: shortid.generate(),
  //   };

  //   this.setState((preState) => {
  //     return {
  //       contacts: [contact, ...preState.contacts],
  //     };
  //   });
  // };

  return (
    <div>
      <Section title="Phonebook">
        <FormPhonebook />
      </Section>
      <Section title="Contacts list">
        <Filter />
        <ContactItem />{" "}
      </Section>
    </div>
  );
}

export default App
