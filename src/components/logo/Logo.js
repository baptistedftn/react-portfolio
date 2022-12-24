import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactLogo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <>
       <img src={ReactLogo} alt="React Logo" width={'100%'} height={'100%'}/>
    </>
  );
};
