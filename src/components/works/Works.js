/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

import Codihack from '../../assets/projects/codihack.png';
import Muzykanty from '../../assets/projects/muzykanty.png';
import Sudrianiode from '../../assets/projects/sudrianoide.png';
import Sudrihack from '../../assets/projects/sudrihack.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Codihack',
      description: `Real-time code editor for Sudrihack using NodeJs for the server and react for the frontend`,
      link: 'http://sudrihack.com:8085/',
      image: `${Codihack}`,
    },
    {
      id: 2,
      title: 'Muzykanty',
      description: `Social network allowing musicians to share videos`,
      link: 'https://muzykanty.fr/',
      image: `${Muzykanty}`,
    },
    {
      id: 3,
      title: 'Sudrianoide',
      description: `Student association of the engineering school ESME dedicated to robotics and electronic projects`,
      link: 'https://instagram.com/sudrianoide/',
      image: `${Sudrianiode}`,
    },
    {
      id: 4,
      title: 'Sudrihack',
      description: `Student association of the engineering school ESME dedicated to computer science`,
      link: 'https://www.instagram.com/esme_sudrihack_lille/',
      image: `${Sudrihack}`,
    },
    

  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.title }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">
                {project.description}
              </p>
              <a href={project.link}>See More</a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
