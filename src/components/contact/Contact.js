/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import axios from 'axios'
import Swal from 'sweetalert2';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";
  const apiKey = '16d8f168-c5cb-4b0d-9c90-facdaaa6df9d'
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://api.staticforms.xyz/submit",
      data: {
        accessKey: apiKey,
        message: message,
        name: name,
        email: mail
      }
    }).then((response) => {
      console.log(response);
      if (response.data.success === true) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Message sent!',
          showConfirmButton: false,
          timer: 1500
        })
        setName('')
        setMail('')
        setMessage('')
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Message not sent!',
          text: 'Use email baptistedesfontaines@pm.me',
          showConfirmButton: true
        })
      }
    })
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   fetch('https://api.staticforms.xyz/submit', {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       accessKey: apiKey,
  //       message: message,
  //       name: name,
  //       email: mail
  //     })
  //   })
  //     .then(
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'success',
  //         title: 'You have sent an email!',
  //         showConfirmButton: false,
  //         timer: 1500
  //       }),
  //       e.target.reset()
  //     )
  //     .catch(
  //       Swal.fire({
  //         position: 'center',
  //         icon: 'error',
  //         title: 'Message not sent!',
  //         text: 'Use email baptistedesfontaines@pm.me',
  //         showConfirmButton: true
  //       }),
  //     )
  // };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                onChange={e => setName(e.target.value)}
                value={name}
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                onChange={e => setMail(e.target.value)}
                value={mail}
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                onChange={e => setMessage(e.target.value)}
                value={message}
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
