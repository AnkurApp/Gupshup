import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#3ECBFF",
    textAlign: "center",
    padding: "1rem 0",
  },

  text: {
    color: "#fff",
    fontSize: "35px",
    fontWeight: "bold",
  },
});
export default function WelcomeLine() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.text}>
        {"Welcome to GupShup!"}
      </Typography>
    </Box>
  );
}
