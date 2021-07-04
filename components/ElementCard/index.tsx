import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import {
  CardMedia,
  Typography,
  CardActionArea,
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
      <Card onClick={onClick} style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CardContent className={classes.content}>
            <div>
              <Typography variant="h6">{title}</Typography>
              <br />
              <Typography color="textSecondary">{description}</Typography>
            </div>
          </CardContent>
          <CardContent>
            <Typography variant="button">Abrir</Typography>
          </CardContent>
        </div>
        {imageUrl && (
          <CardMedia className={classes.media} image={imageUrl} title={title} />
        )}
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
    alignItems: "center",
  },
  media: {
    width: 800,
  },
});

export default ElementCard;

