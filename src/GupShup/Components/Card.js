import React from "react";

import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Card: {
    width: "30%",
    margin: "2rem auto",
    padding: "4rem 1rem",
    backgroundColor: "#3ECBFF",
  },
});

export default function Cards(props) {
  const classes = useStyles();
  return <Card className={classes.Card}>{props.children}</Card>;
}
