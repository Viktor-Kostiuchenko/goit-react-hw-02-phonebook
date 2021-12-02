import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section';
import Form from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Logo from '../Logo';
import { notificate } from '../../helpers/Notification';
import s from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Viktor Kost', number: '221-19-88' },
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
      notificate(newContact.name);
      return;
    } else if (numberDublicate) {
      notificate(newContact.number);
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
    this.setState({ filter: e.target.value });
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
        <Logo></Logo>
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
