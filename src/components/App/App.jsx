import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import s from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Rosie Simfsdfpson', number: '459-12-56' },
      { id: 'id-6', name: 'Hermione Klsdfine', number: '443-89-12' },
      { id: 'id-7', name: 'Eden Clementsdfs', number: '645-17-79' },
      { id: 'id-8', name: 'Annie asdCopelsdfand', number: '227-91-26' },
      { id: 'id-9', name: 'Rosie Sadimpson', number: '459-12-56' },
      { id: 'id-10', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-11', name: 'Eden Clasdements', number: '645-17-79' },
      { id: 'id-12', name: 'Annie asdCopeland', number: '227-91-26' },
      { id: 'id-13', name: 'Rosie Simfsdfpson', number: '459-12-56' },
      { id: 'id-14', name: 'Hermione K14lsdfine', number: '443-89-12' },
      { id: 'id-15', name: 'Eden Clsdeasdmentsdfs', number: '645-17-79' },
      { id: 'id-16', name: 'Annie Copelasdsdfand', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    const nameDublicate = contacts.find(
      contact => contact.name === newContact.name,
    );
    const numberDublicate = contacts.find(
      contact => contact.number === newContact.number,
    );

    if (nameDublicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else if (numberDublicate) {
      alert(`${newContact.number} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterBy = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showFiltered = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.showFiltered();
    return (
      <div className={s.container}>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact}></Form>
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.filterBy}></Filter>
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </Section>
      </div>
    );
  }
}
