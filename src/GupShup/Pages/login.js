import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import Cards from "../Components/Card";
import WelcomeLine from "../Components/WelcomeLine";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../../redux/Actions/authenticationActions";
import { Redirect } from "react-router";

const useStyles = makeStyles({
  loginContainer: {
    width: "100%",
    margin: "3rem auto",
  },

  loginText: {
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

export default function Loginpage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);

  const loginUser = (e) => {
    e.preventDefault();

    dispatch(Signin({ email, password }));
  };

  if (auth.authenticated) {
    return <Redirect to={"/Gupshup"} />;
  }
  // else {
  //   alert("Not A User");
  // }

  return (
    <Box className={classes.loginContainer}>
      <WelcomeLine />

      <Typography variant="h4" className={classes.loginText}>
        {"Login To Proceed"}
      </Typography>

      <Cards>
        <form className={classes.formContainer} onSubmit={loginUser}>
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
            {"Login"}
          </Button>
        </form>
      </Cards>
    </Box>
  );
}
