import React from "react";

import { Box, Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import Cards from "../Components/Card";
import WelcomeLine from "../Components/WelcomeLine";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    margin: "3rem auto",
  },

  btnContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: "50%",
    padding: "0.5rem 2rem",
    margin: "1rem 0",
    backgroundColor: "#fff",
    fontSize: "20px",
    disableRipple: "true",
    height: "50px",

    "&:hover": {
      backgroundColor: "#fff",
      border: "1px solid black",
    },
  },

  btnLink: {
    color: "#3ECBFF",
    fontWeight: "bold",
    textDecoration: "none",

    "&:hover": {
      color: "#000",
    },
  },
});

export default function InitialScreen() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <WelcomeLine />

      <Cards>
        <Box className={classes.btnContainer}>
          <Button className={classes.btn}>
            <NavLink to={"/login"} className={classes.btnLink}>
              {"Login"}
            </NavLink>
          </Button>
          <Button className={classes.btn}>
            <NavLink to={"/Signup"} className={classes.btnLink}>
              {"SignUp"}
            </NavLink>
          </Button>
        </Box>
      </Cards>
    </Box>
  );
}
