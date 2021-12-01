import React from 'react';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <div className={s.wrapper}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
        <span className={s.focusBorder}>
          <i></i>
        </span>
      </div>
    </label>
  );
}