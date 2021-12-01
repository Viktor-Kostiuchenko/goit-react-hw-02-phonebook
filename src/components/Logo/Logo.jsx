import React from 'react';
import s from './Logo.module.css';

export default function Logo({ logo }) {
  return (
    <>
      {logo && (
        <a className={s.link} href="../../../build/index.html">
          <img className={s.logo} src={logo} alt="logo" />
        </a>
      )}
    </>
  );
}
