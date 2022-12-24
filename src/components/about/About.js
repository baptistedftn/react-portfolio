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
  const aboutme = `
  <span id="a">root@baptiste</span>:<span id="b">~</span><span id="c">$</span>cd /home/<!-- kjsdfhkjdhsfkjdshfkj -->baptiste<br/>
  <span id="a">root@baptiste</span>:<span id="b">/www/website</span> cat <!-- kjsdfhkjdhsfkjdshfkj -->life.txt<br/><br/>
  
  Hey There! My name is Baptiste
  <!-- laglaglaglaglaglaglaglaglaglaglaglag -->
  <p>I'm a student in engineering school in Lille and a saxophonist 🎷 </p>
  <!-- laglaglaglaglaglaglaglaglaglaglaglag -->
  <!-- kjdhjhgdgldjhgdwtoiewotwotjdfkjdfffsf -->
  <p> You can follow me on</p>
  <a href="//instagram.com/baptistedftn">_instamgam</a>
  <p></p>
  <a href="//github.com/baptistedftn">_github</a>
  <p>&amp;</p>
  <a href="//linkedin.com/in/baptistedftn">_linkedin</a>
  <p>
  You can also contact me by email <!-- slightdelayhere-->, at <a href="mailto:baptistedesfontaines@pm.me">baptistedesfontaines@pm.me</a>
  
  </p>
  <span id="a">root@baptiste</span>:<span id="b">~</span><span id="c">$</span> exit
  `
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
            <Type texts={[aboutme]} className="console" />
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
