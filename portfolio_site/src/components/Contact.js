import React from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import "./Home.css";

export default function Contact() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('default_service', 'real', e.target, 'user_S1owFNY9l8W7ZE3OKqia1')
        .then((result) => {
            alert("Message Sent!");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <div>
       <form className="contact-form" onSubmit={sendEmail}>
         <div className="column left">
           <p></p>
         </div>
         <div className="column middle">
           <div className="titleContainer">
             <h1 id="contactHeader">
               Contact Me!
             </h1>
             <p id="pText">
               Fill out the form below to send me an email. I will respond as soon as I can. Please provide your email and/or your phone number so that I will be able to get back to you. Thank you for viewing my portfolio!
             </p>
           </div>
           <div className="column middle-left">
             <input type="hidden" name="contact_number" />
             <div className="inputConTop">
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
             <input className="submitButton" type="submit" value="Send" />
           </div>
           <div className="column middle-right">
             <div className="rightContent">
                <div className="rightConHeader">
                  <h1 id="contactHead">My Contact Information</h1>
                  <hr id="line"></hr>
                </div>
                <div className="rightConContent">
                  <h2 id="head">Social Media Links</h2>
                    <a className="socialImages" href=""><img className="imagesForSocial" src="./icons8-facebook-48.png" alt="facebook"/></a>
                    <a className="socialImages" href="https://www.linkedin.com/in/harry-smith-a97a29188/"><img className="imagesForSocial" src="./icons8-linkedin-48.png" alt="linkedin" /></a>
                    <a className="socialImages" href="https://twitter.com/harrymans97"><img className="imagesForSocial" src="./icons8-twitter-squared-48.png" alt="twitter" /></a>
                    <a className="socialImages" href="https://github.com/harryman20"><img className="imagesForSocial" src="./icons8-github-48.png" alt="gitHub" /></a>
                  <h2 id="head2">Additional Information</h2>
                  <hr id="line"></hr>
                  <h4>Telephone: 1 519 890 2057</h4>
                  <h4>Email: harrisonsmith646@gmail.com</h4>
                  <h4>You can also reach out to me on discord. (request discord name in message on the left)</h4>
                </div>
             </div>
           </div>
         </div>
         <div className="column right">
           <p></p>
         </div>
       </form>
     </div>
    );
  }
