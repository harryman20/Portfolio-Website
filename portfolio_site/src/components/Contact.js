import React, { Component } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import "./Home.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function Contact() {
    const { register, handleSubmit, watch, errors } = useForm();
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('default_service', 'real', e.target, 'user_S1owFNY9l8W7ZE3OKqia1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <div>
        <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
          <div className="column left">
            <p></p>
          </div>
          <div className="column middle">
            <div className="titleContainer">
              <h1>
                Contact Me!
              </h1>
              <p id="pText">
                Fill out the form below to send me an email. I will respond as soon as I can. Please provide your email and/or your phone number so that I will be able to get back to you. Thank you for viewing my portfolio!
              </p>
            </div>
            <div className="column middle-left">
              <input type="hidden" name="contact_number" />
              <div className="inputCon">
                <label htmlFor="user_name">Name*: </label>
                <input type="text" ref={register({ required: "This is required" })} name="user_name" />
                <br />
                <ErrorMessage errors={errors} name="user_name">
                  {({ message }) => <p id="usernameError">{message}</p>}
                </ErrorMessage>
              </div>
              <div className="inputCon">
                <label htmlFor="user_email">Email*: </label>
                <input refs="email" ref={register({ required: "This is required" })} type="email" name="user_email" />
                <br />
                <ErrorMessage errors={errors} name="user_email">
                  {({ message }) => <p id="usernameError">{message}</p>}
                </ErrorMessage>
              </div>
              <div className="inputCon">
                <label htmlFor="phone">Phone-Number: </label>
                <input type="phone" name="phone" />
              </div>
              <div className="inputCon">
                <label htmlFor="message">Message*: </label>
                <textarea ref={register({ required: "This is required" })} name="message"/>
                <br />
                <ErrorMessage errors={errors} name="user_email">
                  {({ message }) => <p id="usernameError">{message}</p>}
                </ErrorMessage>
              </div>
              <input className="submitButton" type="submit" value="Send" />
            </div>
            <div className="column middle-right">
              <div className="rightContent">
                <h2>My Contact Information</h2>
                <h3>Social Media Links</h3>
                <h4>Twitter</h4>
                <h4>Facebook</h4>
                <h4>LinkedIn</h4>
                <h4>GitHub</h4>
                <h3>Additional Information</h3>
                <h4>Telephone: 1 519 890 2057</h4>
                <h4>Email: harrisonsmith646@gmail.com</h4>
                <h4>You can also reach out to me on discord. (request discord name in message on the left)</h4>
              </div>
            </div>
          </div>
          <div className="column right">
          </div>
        </form>
      </div>
    );
  }
