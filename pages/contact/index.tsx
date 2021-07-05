import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  Paper,
  Typography,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.content}>
      <Typography variant="h4">Contacto</Typography>
      <br />
      <ListItemText primary="Actualmente solo contamos comunicación vía correo electrónico:" />
      <br />
      <div className={classes.contact}>
        <ListItemAvatar>
          <Avatar>
            <MailOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Correo" secondary="bioteam.fluss@gmail.com" />
      </div>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },
  contact: {
    display: "flex",
    alignItems: "center",
    "& > :not(:last-child)": {
      marginRight: theme.spacing(0),
    },
  },
}));

export default Contact;

