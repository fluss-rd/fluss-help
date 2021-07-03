import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";

interface ElementCardProps {
  title: string;
  description: string;
  onClick: () => void;
  imageUrl: string;
}

const ElementCard: FC<ElementCardProps> = (props) => {
  const classes = useStyles();
  const { title, onClick, description, imageUrl } = props;

  return (
    <CardActionArea>
      <Card className={classes.root} onClick={onClick}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CardContent className={classes.content}>
            <div>
              <Typography variant="h6">{title}</Typography>
              <br />
              <Typography color="textSecondary">{description}</Typography>
            </div>
          </CardContent>

          <CardActions>
            <Button color="primary">Abrir</Button>
          </CardActions>
        </div>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
      </Card>
    </CardActionArea>
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
    display: "flex",
    width: "100%",
  },
  media: {
    width: 700,
  },
});

export default ElementCard;

