import React from 'react';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <div className={s.info}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={s.button}
      >
        <span className={s.topKey}></span>
        <span className={s.buttonText}>delete</span>
        <span className={s.firstKey}></span>
        <span className={s.secondKey}></span>
      </button>
    </>
  );
}
