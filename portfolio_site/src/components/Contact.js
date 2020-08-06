import React, { Component } from "react";
import emailjs from 'emailjs-com';

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
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default Contact;
