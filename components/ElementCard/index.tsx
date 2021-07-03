import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  Typography,
  CardActionArea,
  Card,
  ListItem,
  ListItemText,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface ElementCardProps {
  title: string;
}

const ElementCard: FC<ElementCardProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <div>
            <Typography variant="h6">{title}</Typography>
            <br />
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              hic totam perspiciatis! Incidunt doloremque voluptatibus, fugit
              saepe quos, ea facilis assumenda, expedita mollitia possimus
              pariatur consequuntur odit adipisci delectus dicta.
            </Typography>
          </div>
          <div className={classes.action}>
            <ChevronRightIcon />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles({
  action: {
    width: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
  },
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
});

export default ElementCard;

