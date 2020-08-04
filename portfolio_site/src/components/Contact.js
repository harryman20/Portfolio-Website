import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <h3>How to contact me on Social media</h3>
        <p>twitter</p>
        <p>github</p>
        <p>facebook</p>
        <p>linkedin</p>
        <form>
          <h1>Email Inquiry Form</h1>
          <label for="name">
            Name:
            <input name="name" type="text" />
          </label>
          <label for="email">
            Email:
            <input name="email"type="email" />
          </label>
          <input type="submit"></input>
          <input type="textarea"></input>
        </form>
      </div>
    );
  }
}

export default Contact;
