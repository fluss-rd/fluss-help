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
      <ListItem>
        <Typography variant="h4">Contacto</Typography>
      </ListItem>
      <ListItem>
        <ListItemText primary="Actualmente solo contamos comunicación vía correo electrónico:" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Correo" secondary="bioteam.fluss@gmail.com" />
      </ListItem>
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}));

export default Contact;

