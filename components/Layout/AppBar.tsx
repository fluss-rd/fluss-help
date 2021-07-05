import {
  AppBar as Navbar,
  Link,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

const AppBar: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const classes = useStyles({ currentRoute });
  const theme = useTheme();
  const goTo = (path: string) => () => router.push(path);

  const computeBackground = (route: string) => {
    console.log({ currentRoute, route });
    if (currentRoute === route) return theme.palette.grey[200];

    return undefined;
  };

  return (
    <Navbar position="fixed" color="inherit">
      <Toolbar>
        <Button className={classes.brand} onClick={goTo("/")}>
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
        <div className={classes.startButtons}>
          <Button
            color="default"
            className={classes.reportsButton}
            style={{ background: computeBackground("/") }}
            onClick={goTo("/")}
          >
            Ayuda
          </Button>
        </div>
        <div className={classes.endButtons}>
          <Button
            color="default"
            className={classes.reportsButton}
            style={{ background: computeBackground("/contact") }}
            onClick={goTo("/contact")}
          >
            Contacto
          </Button>
          <Button
            color="default"
            className={classes.reportsButton}
            style={{ background: computeBackground("/faq") }}
            onClick={goTo("/faq")}
          >Preguntas frecuentes</Button>
          <Button
            color="default"
            className={classes.reportsButton}
            href="https://fluss-bioteam.vercel.app/"
            target="_blank"
          >
            Ir a fluss
          </Button>
        </div>
      </Toolbar>
    </Navbar>
  );
};

const useStyles = makeStyles<Theme, { currentRoute: string }>(
  (theme: Theme) => ({
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
  })
);

export default AppBar;

