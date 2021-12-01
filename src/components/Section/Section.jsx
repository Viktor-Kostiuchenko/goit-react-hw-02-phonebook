import React from 'react';
import s from './Section.module.css';

export default function Section({ title, logo, children }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}
