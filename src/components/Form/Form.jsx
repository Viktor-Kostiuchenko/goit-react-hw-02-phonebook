import React, { Component } from 'react';
import s from './Form.module.css';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    console.log();
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} autoComplete="off">
        <div className={s.inputBox}>
          <input
            className={s.input}
            onChange={this.onChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // autoComplete="off"
            required
          />
          <label className={s.label}>Name</label>
        </div>
        <div className={s.inputBox}>
          <input
            className={s.input}
            onChange={this.onChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // autoComplete="off"
            required
          />
          <label className={s.label}>Number</label>
        </div>
        <button className={s.button} type="submit">
          <span>Add contact</span>
        </button>
      </form>
    );
  }
}
