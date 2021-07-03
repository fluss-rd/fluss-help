import { makeStyles } from "@material-ui/core/styles";
import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface PageTitleProps {
  children: string;
}

const PageTitle: FC<PageTitleProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography variant="h4">{children}</Typography>
    </div>
  );
};

const useStyles = makeStyles({
  header: {
    textAlign: "center",
  },
});

export default PageTitle;

