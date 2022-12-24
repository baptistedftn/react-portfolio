/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';
import { Type } from "../content/TextTyping";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello!";
  const aboutme = `<span id="a">root@baptiste</span>:<span id="b">~</span><span id="c">$</span> cd /home/baptiste
  <span id="a">root@baptiste</span>:<span id="b">~</span><span id="c">$</span> cat life.txt<br/><br/>
  <p>Hey There! My name is Baptiste</p><p>I'm a student in engineering school in Lille and a saxophonist 🎷</p>
  <span id="a">root@baptiste</span>:<span id="b">~</span><span id="c">$</span> exit`
  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="console">
              <Type texts={[aboutme]} loop={true} />
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Get in touch.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
