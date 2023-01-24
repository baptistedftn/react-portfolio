import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { TextDecrypt } from '../content/TextDecrypt';
import { ChevronLeftTwoTone } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      to={'/resume'}
      className={classes.footerText}
    >
      <ChevronLeftTwoTone />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>
  );
};
