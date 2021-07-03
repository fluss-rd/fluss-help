import {
  AppBar as Navbar,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

const AppBar: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const goToHome = () => router.push("/");

  return (
    <Navbar position="fixed" color="inherit">
      <Toolbar>
        <Button className={classes.brand} onClick={goToHome}>
          <div className={classes.logo}>
            <Image src="/images/logo.png" alt="Logo" width={35} height={35} />
          </div>
          <Typography
            className={classes.title}
            color="primary"
            variant="h6"
            noWrap
          >
            fluss
          </Typography>
          <Typography
            className={classes.title}
            color="secondary"
            variant="h6"
            noWrap
            style={{ marginLeft: 5 }}
          >
            {"  "}
            ayuda
          </Typography>
        </Button>
        <div className={classes.startButtons} />
        <div className={classes.endButtons}>
          <Button color="default" className={classes.reportsButton}>
            Contacto
          </Button>
          <Button color="default" className={classes.reportsButton}>
            Ir a fluss
          </Button>
        </div>
      </Toolbar>
    </Navbar>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  brand: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight: theme.spacing(3),
    padding: 0,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontSize: theme.typography.h5.fontSize,
    cursor: "pointer",
    textTransform: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  startButtons: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  reportsButton: {
    borderRadius: 10,
  },
  endButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(3),
    },
  },
  navbar: {
    backgroundColor: `${theme.palette.background.default}CC`,
    backdropFilter: `blur(4px)`,
  },
}));

export default AppBar;

