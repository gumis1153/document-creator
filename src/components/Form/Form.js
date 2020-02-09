import React, { Component } from 'react';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    street: '',
    homeNumber: '',
    city: '',
    postcode: '',
    email: '',
    phone: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    //przekazanie danych nowego klienta do modal
    const { callBackFromForm } = this.props;
    callBackFromForm(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { firstName, lastName, phone, email, city, postcode, street, homeNumber } = this.state;
    const { handleChange } = this;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className={styles.personalInfo}>
          <span>Dane personalne</span>
          <label>Imię</label>
          <input onChange={handleChange} value={firstName} type="text" name="firstName" required />
          <label>Nazwisko</label>
          <input onChange={handleChange} value={lastName} type="text" name="lastName" required />
          <label>Nr telefonu</label>
          <input onChange={handleChange} value={phone} type="text" name="phone" required />
          <label>Adres email</label>
          <input onChange={handleChange} value={email} type="text" name="email" />
        </div>
        <div className={styles.locationInfo}>
          <span>Adres zamieszkania</span>
          <label>Miasto</label>
          <input onChange={handleChange} value={city} type="text" name="city" required />
          <label>Kod pocztowy</label>
          <input onChange={handleChange} value={postcode} type="text" name="postcode" required />
          <label>Ulica</label>
          <input onChange={handleChange} value={street} type="text" name="street" required />
          <label>Nr domu/mieszkania</label>
          <input
            onChange={handleChange}
            value={homeNumber}
            type="text"
            name="homeNumber"
            required
          />
          <button type="submit">Dalej</button>
        </div>
        <div className={styles.additionalInfo}>
          <span>Dodatkowe informacje</span>
          <label>Adres montażu taki sam jak adres zamieszkania</label>
          <input type="checkbox" />
        </div>
      </form>
    );
  }
}

export default Form;
