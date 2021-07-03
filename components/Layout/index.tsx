import { Container, CssBaseline, Toolbar } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React, { FC } from "react";

import FlussAppBar from "./AppBar";

const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <FlussAppBar />
      <div style={{ flexGrow: 1 }}>
        <Toolbar />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default Layout;

