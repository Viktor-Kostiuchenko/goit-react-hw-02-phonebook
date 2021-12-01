import React from 'react';
import s from './ContactItem.module.css';
import Icons from '../../../images/sprite.svg';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <>
      <ul className={s.info}>
        <li className={s.item}>
          <svg className={s.icon} width="18" height="18">
            <use xlinkHref={`${Icons}#book`}></use>
          </svg>
          <p>{name}</p>
        </li>
        <li className={s.item}>
          <svg className={s.icon} width="18" height="18">
            <use xlinkHref={`${Icons}#mobile`}></use>
          </svg>
          <p>{number}</p>
        </li>
      </ul>
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
