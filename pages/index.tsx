import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Typography } from "@material-ui/core";
import ElementCard from "../components/ElementCard";
import SearchBar from "../components/SearchBar";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const classes = useStyles();
  const elements = [
    "Este es un título particular",
    "Este es otro",
    "Por esta razón soñamos",
    "Hey, esto es así",
  ];

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h4">Ayuda a usuarios</Typography>
      </div>
      <br />
      <SearchBar placeholder="Busca lo que quires hacer" />
      <br />
      <br />
      <div className={classes.elements}>
        {elements.map((element) => (
          <ElementCard title={element} />
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
  },
  elements: {
    "& > *:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default Home;

