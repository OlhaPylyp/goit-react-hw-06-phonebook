import { Component } from "react";
import "./App.css";
import shortid from "shortid";
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Filter from "./Components/Filter";
import Section from "./Components/Section";
import { connect} from "react-redux";
import store from "./Redux/store";
import * as actions from "./Redux/action"

 function App({items, filter, onAddContact, onFilter,onDeleteContact })  {
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

  // filterChange = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // deleteContact = (id) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== id),
  //   }));
  // };

  // render() {
  //     const { name, filter } = this.state;
  //   const normalizedFilter = this.state.filter.toLowerCase();
  //   const filterNamePhoneBook = this.state.contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  console.log("filter", filter)

    return (
      <div>
        <Section title="Phonebook">
          <FormPhonebook  onSubmit={onAddContact} />
        </Section>
       <Section title="Contacts list">
         
           <Filter value={filter} onChange={onFilter} />
          <ContactItem
            onDeleteContact={onDeleteContact}
            contacts={items}
          />{" "}
        </Section>
      </div>
    );
    
  // }
 
}
 const mapStateToProps = (state, props) => {
 return {items: state.items,
    filter: state.filter,
    value:state.x,}  
  
  };
  const mapDispatchToProps = (dispatch) => {
    return{ onAddContact:({ name, number })=>dispatch(actions.addContact({ name, number })),
    onFilter:()=>dispatch(actions.filterChange()),
    onDeleteContact:(id)=>dispatch(actions.deleteContact(id)),
    }
   
   };
export default connect(mapStateToProps, mapDispatchToProps)(App);
