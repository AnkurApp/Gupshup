import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
  UpdateMessage,
  countUnReadMessages,
} from "../../redux/Actions/userActions";
import { useDispatch } from "react-redux";

import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";
import TextArea from "./TextArea";

const useStyles = makeStyles({
  messageContainer: {
    width: "72%",
    marginLeft: "28%",
    position: "fixed",
    height: "100%",
    backgroundColor: "fff",
  },
});

export default function MessageComp(props) {
  const { chatStarted, chatUser, user, auth, receiverUid } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  let textDate = "";

  const SendMessage = () => {
    const messageObj = {
      senderUid: auth.uid,
      receiverUid,
      message,
      isView: false,
      createdAt: +new Date(),
    };

    if (message !== "") {
      dispatch(UpdateMessage({ messageObj, chatUser, auth })).then(() => {
        setMessage("");
      });
    }

    dispatch(countUnReadMessages({ auth, user, chatUser }));
  };

  return (
    <Box className={classes.messageContainer}>
      {/* Message Header */}
      <MessageHeader
        chatStarted={chatStarted}
        chatUser={chatUser}
        auth={auth}
      />

      {/* Message area */}
      <TextArea chatStarted={chatStarted} user={user} auth={auth} />

      {/* Footer/ Send Message Section */}
      {chatStarted ? (
        <MessageFooter
          message={message}
          setMessage={setMessage}
          SendMessage={SendMessage}
        />
      ) : null}
    </Box>
  );
}
