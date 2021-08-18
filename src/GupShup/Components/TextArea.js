import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Sender, Receiver } from "./MessageComponents";

const useStyles = makeStyles({
  textSection: {
    boxSizing: "border-box",
    width: "100%",
    height: "801.5px",
    // height: "100%",
    marginTop: "71px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflowX: "hidden",
    overflowY: "scroll",
  },

  chatContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}
export default function TextArea(props) {
  const { chatStarted, user, auth } = props;
  const classes = useStyles();
  let textDate = "";
  return (
    <Box className={classes.textSection}>
      {chatStarted ? (
        <>
          <p style={{ textAlign: "center" }}>
            {textDate === getFormattedDate(new Date()) ? "Today" : textDate}
          </p>

          {user?.conversations?.map((chat) => {
            let time = new Intl.DateTimeFormat("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(chat.createdAt);

            let date = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(chat.createdAt);

            if (date !== textDate) {
              textDate = date;
            }
            return (
              <Box className={classes.chatContainer} key={chat.newMessagekey}>
                {chat.senderUid === auth.uid ? (
                  <Sender
                    message={chat.message}
                    time={time}
                    isView={chat.isView}
                  />
                ) : (
                  <Receiver message={chat.message} time={time} />
                )}
              </Box>
            );
          })}
        </>
      ) : null}
    </Box>
  );
}
