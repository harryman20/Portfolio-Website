import React, { Component } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';

class Contact extends Component {
  render() {
      function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('default_service', 'real', e.target, 'user_S1owFNY9l8W7ZE3OKqia1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="formContainer">
          <input type="hidden" name="contact_number" />
          <div className="inputCon">
            <label htmlFor="user_name">Name*: </label>
            <input type="text" name="user_name" required />
          </div>
          <div className="inputCon">
            <label htmlFor="user_email">Email*: </label>
            <input type="email" name="user_email" required />
          </div>
          <div className="inputCon">
            <label htmlFor="phone">Phone-Number: </label>
            <input type="phone" name="phone" required />
          </div>
          <div className="inputCon">
            <label htmlFor="message">Message*: </label>
            <textarea name="message"/>
          </div>
          <input type="submit" value="Send" />
        </div>
      </form>
    );
  }
}

export default Contact;
