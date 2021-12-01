import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  console.log(value);
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
