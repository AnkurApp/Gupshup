import React, { useState } from "react";

import {
  makeStyles,
  TextField,
  Button,
  Box,
  Typography,
} from "@material-ui/core";

import { Signup } from "../../redux/Actions/authenticationActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

import Cards from "../Components/Card";
import WelcomeLine from "../Components/WelcomeLine";

const useStyles = makeStyles({
  signUpContainer: {
    width: "100%",
    margin: "3rem auto",
  },

  signupText: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#3ECBFF",
    marginTop: "1.5rem",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputField: {
    width: "70%",
    backgroundColor: "#fff",
    margin: "0.5rem 0",
    padding: "0.5rem 1rem",
    borderRadius: "20px",

    "& .MuiInput-underline:before": {
      border: "none",
      transition: "none",
      content: "none",
      position: "inherit",
    },

    "& .MuiInput-underline:after": {
      border: "none",
      transition: "none",
    },
  },

  btn: {
    width: "50%",
    padding: "0.5rem 2rem",
    margin: "1.5rem 0",
    backgroundColor: "#fff",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3ECBFF",
    disableRipple: "true",
    height: "50px",

    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid black",
    },
  },
});

export default function SignupPage() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const signInUser = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(Signup(user));

    setName("");
    setEmail("");
    setPassword("");
  };

  if (auth.authenticated) {
    return <Redirect to={"/Gupshup"} />;
  }

  return (
    <Box className={classes.signUpContainer}>
      <WelcomeLine />

      <Typography variant="h4" className={classes.signupText}>
        {"Sign Up To Proceed"}
      </Typography>

      <Cards>
        <form onSubmit={signInUser} className={classes.formContainer}>
          <TextField
            name="name"
            type="text"
            value={name}
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
            className={classes.inputField}
          />

          <TextField
            name="email"
            type="email"
            value={email}
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className={classes.inputField}
          />

          <TextField
            name="password"
            type="password"
            value={password}
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className={classes.inputField}
          />

          <Button type="submit" className={classes.btn}>
            {"Sign Up"}
          </Button>
        </form>
      </Cards>
    </Box>
  );
}
