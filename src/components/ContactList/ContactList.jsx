import React from 'react';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            ></ContactItem>
          </li>
        ))}
      </ul>
    </>
  );
}
