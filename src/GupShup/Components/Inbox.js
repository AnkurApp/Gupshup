import React from "react";
import {
  Box,
  Divider,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { Users } from "./User";

const useStyles = makeStyles({
  inboxContainer: {
    width: "26%",
    margin: "0 auto",
    height: "100%",
    position: "fixed",
    backgroundColor: "#fff",
    padding: "0.5rem 1rem",
  },

  userName: {
    backgroundColor: "#3ECBFF",
    padding: "0.6rem 1rem",
    borderRadius: "20px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    marginBottom: "0.7rem",
  },

  searchUser: {
    width: "91%",
    margin: "1rem 0",
    padding: "0.3rem 1rem",
    backgroundColor: "#fff",
    borderRadius: "50px",
    textDecoration: "none",
    border: "2px solid #3ECBFF",

    "& .MuiInput-underline:before": {
      border: "none",
      transition: "none",
      content: "none",
      position: "inherit",
    },

    "& .MuiInput-underline:after": {
      border: "none",
      transition: "none",
      content: " ",
      position: "inherit",
    },
  },
  addUserBtn: {
    width: "25%",
    margin: "0 30%",
    backgroundColor: "#3ECBFF",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",

    "&:hover": {
      backgroundColor: "#3ECBFF",
    },
  },
});

export default function InboxComp(props) {
  const classes = useStyles();
  const { auth, user, setModalOpen, chatInitialize } = props;
  return (
    <Box className={classes.inboxContainer}>
      <Box>
        <Typography
          variant="h5"
          className={classes.userName}
        >{`Hello ${auth.name}`}</Typography>
      </Box>
      <Divider />
      <TextField
        variant="standard"
        type="search"
        className={classes.searchUser}
        placeholder="Search User"
      />
      <Button className={classes.addUserBtn} onClick={() => setModalOpen(true)}>
        {"Add User"}
      </Button>

      {/* Inbox User Display */}
      {user?.inboxusers?.map((inbox) => {
        return (
          <div key={inbox.uid}>
            <Users userData={inbox} chatInitialize={chatInitialize} />
          </div>
        );
      })}
    </Box>
  );
}
